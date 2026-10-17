import { Injectable, computed, signal } from '@angular/core';
import { it, Dictionary } from './translations/it'
import { en } from './translations/en'

export type Lang = 'it' | 'en';
export const LANGS: readonly Lang[] = ['it', 'en'];

const DICTIONARIES: Record<Lang, Dictionary> = {it, en};
const STORAGE_KEY = 'portfolio-lang';

@Injectable({
  providedIn: 'root',
})

export class LanguageService {
  private readonly _lang = signal<Lang>(this.detectInitialLang());
  readonly lang = this._lang.asReadonly();
  private readonly dictionary = computed(() => DICTIONARIES[this._lang()])

  isLang(value: unknown): value is Lang {
    return LANGS.includes(value as Lang);
  }

  getSavedLang(): Lang | null {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return this.isLang(saved)
        ? saved
        : null;
    } catch(err) {
      console.error(`Errore nel recupero della lingua impostata: ${err}`);
      return null;
    }
  }

  private detectInitialLang(): Lang {
    const saved = this.getSavedLang();
    if (saved) return saved;
    return navigator.language?.toLocaleLowerCase().startsWith('it')
      ? 'it'
      : 'en'
  }

  pick<T>(field: Record<Lang, T>): T {
        return field[this._lang()];
  }

  t(key: string): string {
        const value = key.split('.').reduce<any>((node, part) => node?.[part], this.dictionary());
        return typeof value === 'string' ? value : key;
  }

  set(lang: Lang): void {
        this._lang.set(lang);
        document.documentElement.lang = lang;
        try { localStorage.setItem(STORAGE_KEY, lang); } catch { /* storage non disponibile */ }
  }

}
