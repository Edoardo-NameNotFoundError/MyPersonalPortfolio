import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../i18n/language.service';

@Component({
  selector: 'app-navbar-component',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar-component.html',
  styleUrl: './navbar-component.scss',
})
export class NavbarComponent {
  i18n = inject(LanguageService);

  getNavBarLabels(value : string): string {
    return this.i18n.t(`nav.${value}`);
  }
}