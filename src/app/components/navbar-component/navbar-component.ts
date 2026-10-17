import { Component, inject, computed } from '@angular/core';
import { Location } from '@angular/common';
import { Router, Route, NavigationEnd, RouterModule } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map } from 'rxjs';

import { LanguageService } from '../../i18n/language.service';
import { TPipe } from '../../i18n/t.pipe';

interface NavLink {
  path: string,
  labelKey: string
}

@Component({
  selector: 'app-navbar-component',
  standalone: true,
  imports: [RouterModule, TPipe],
  templateUrl: './navbar-component.html',
  styleUrl: './navbar-component.scss',
})


export class NavbarComponent {
  private router = inject(Router);
  private location = inject(Location);
  
  i18n = inject(LanguageService);

  private readonly menuRoute : NavLink[] = this.extractValidMenuRoutes();

  private readonly currentUrl = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map(event => event.urlAfterRedirects)
    ),
    {initialValue: this.router.url}
  );

  protected readonly otherRoutes = computed(() => {
    const url = this.currentUrl();
    return this.menuRoute.filter(route => !url.endsWith(`/${route.path}`));
  })

  private extractValidMenuRoutes(): NavLink[] {
    const langRoute = this.router.config.find(route => route.path === ':lang');
    const childRoutes = langRoute?.children ?? []; //fallback

    return childRoutes
      .filter(route => this.isValidRoute(route))
      .map(route => this.mapToNavLink(route));
  }

  private isValidRoute(route: Route): Boolean {
    const hasPath = typeof route.path === 'string';
    const isVisibleFromMenu = route.data?.['showInMenu'] === true;
    const hasLabel = typeof route.data?.['labelKey'] === 'string';

    return hasPath && isVisibleFromMenu && hasLabel;
  }

  private mapToNavLink(route: Route): NavLink {
    return {
      path: route.path as string,
      labelKey: route.data?.['labelKey'] as string
    }
  };

  goBack(){
    this.location.back();
  }
}
