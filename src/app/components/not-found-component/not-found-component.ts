import { Component, OnDestroy, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LayoutService } from '../../services/layout.service';

import { LanguageService } from '../../i18n/language.service';
import { TPipe } from '../../i18n/t.pipe';

@Component({
  selector: 'app-not-found-component',
  standalone: true,
  imports: [RouterModule, TPipe],
  templateUrl: './not-found-component.html',
  styleUrl: './not-found-component.scss',
})

export class NotFoundComponent implements OnDestroy {
  private layout = inject(LayoutService);
  readonly i18n = inject(LanguageService);

  constructor() {
    this.layout.showFooter.set(false);
    this.layout.showNavbar.set(false);
  }

  ngOnDestroy(): void {
    this.layout.showFooter.set(true);
    this.layout.showNavbar.set(true);
  }
}
