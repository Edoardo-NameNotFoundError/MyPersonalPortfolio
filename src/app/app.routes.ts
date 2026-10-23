import { inject } from '@angular/core';
import { ResolveFn, Routes } from '@angular/router';
import { LanguageService } from './i18n/language.service';
import { langMatch } from './i18n/lang.guards';

const title = (key: string): ResolveFn<string> => () => inject(LanguageService).t(key);

const notFound = () =>
    import('./components/not-found-component/not-found-component').then(m => m.NotFoundComponent);

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: () => `/${inject(LanguageService).lang()}/home`
    },
    {
        path: ':lang',
        canMatch: [langMatch],
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            {
                path: 'home', title: title('title.home'),
                data: {showInMenu: true, labelKey: 'title.home'},
                loadComponent: () => import('./components/home-component/home-component').then(m => m.HomeComponent)
            },
            {
                path: 'chi-sono', title: title('title.chiSono'),
                data: {showInMenu: true, labelKey: 'title.chiSono'},
                loadComponent: () => import('./components/chi-sono.component/chi-sono.component').then(m => m.ChiSonoComponent)
            },
            {
                path: 'progetti', title: title('title.progetti'),
                data: {showInMenu: true, labelKey: 'title.progetti'},
                loadComponent: () => import('./components/progetti-component/progetti-component').then(m => m.ProgettiComponent)
            },
            {
                path: 'progetti/:slug', title: title('title.dettaglio'),
                loadComponent: () => import('./components/progetto-dettaglio.component/progetto-dettaglio.component').then(m => m.ProgettoDettaglioComponent)
            },
            {
                path: 'contatti', title: title('title.contatti'),
                data: {showInMenu: true, labelKey: 'title.contatti'},
                loadComponent: () => import('./components/contatti-component/contatti-component').then(m => m.ContattiComponent)
            },
            { path: '**', title: title('title.notFound'), loadComponent: notFound }
        ]
    },
    { path: '**', loadComponent: notFound }
];