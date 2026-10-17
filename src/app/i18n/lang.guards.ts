import { inject } from '@angular/core';
import { CanActivateFn, CanMatchFn, Router } from '@angular/router';
import { LanguageService } from './language.service';

export const langMatch: CanMatchFn = (_route, segments) => {
    const i18n = inject(LanguageService);
    const lang = segments[0]?.path;
    if (!i18n.isLang(lang)) return false;
    i18n.set(lang);
    return true;
};