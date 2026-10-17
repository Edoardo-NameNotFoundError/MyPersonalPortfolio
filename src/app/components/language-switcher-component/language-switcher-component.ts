import { Component, inject, signal, HostListener, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { LANGS, Lang, LanguageService } from '../../i18n/language.service';

@Component({
  selector: 'app-language-switcher-component',
  standalone: true,
  imports: [],
  templateUrl: './language-switcher-component.html',
  styleUrl: './language-switcher-component.scss',
})
export class LanguageSwitcherComponent {
  protected readonly i18n = inject(LanguageService);
  private readonly router = inject(Router);
  private readonly elementRef = inject(ElementRef);

  protected readonly langs = LANGS;
  readonly isOpen = signal(false);

  private readonly langNames: Record<Lang, string> = {
    it: 'Italiano',
    en: 'English'
  };

  private readonly langCssValues: Record<Lang, string> = {
    it: 'italiano',
    en: 'english'
  };

  getLangName(lang: Lang): string {
    return this.langNames[lang];
  }

  getCssValue(lang: Lang): string {
    return this.langCssValues[lang];
  }

  togglePicker(): void {
    this.isOpen.update(v => !v);
  }

  switch(lang: Lang, event?: Event): void {
    if (event) {
      event.preventDefault(); 
    }

    if (lang === this.i18n.lang()) {
      this.isOpen.set(false);
      return;
    }

    const url = this.router.url.replace(/^\/(it|en)(?=[/?#]|$)/, `/${lang}`);
    
    this.router.navigateByUrl(url).then(() => {
      this.i18n.set(lang);   
      this.isOpen.set(false);
    });
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen.set(false);
    }
  }
}