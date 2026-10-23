import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavbarComponent } from './components/navbar-component/navbar-component';
import { LanguageSwitcherComponent } from './components/language-switcher-component/language-switcher-component';
import { FooterComponent } from './components/footer-component/footer-component';

import { LayoutService } from './services/layout.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LanguageSwitcherComponent, NavbarComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('MyPersonalPortfolioApp');
  
  layout = inject(LayoutService);
}
