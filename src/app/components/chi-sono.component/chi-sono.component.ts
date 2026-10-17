import { Component, inject } from '@angular/core';

import { LanguageService } from '../../i18n/language.service';
import { TPipe } from '../../i18n/t.pipe';

@Component({
  selector: 'app-chi-sono.component',
  imports: [TPipe],
  templateUrl: './chi-sono.component.html',
  styleUrl: './chi-sono.component.scss',
})
export class ChiSonoComponent {
  protected readonly i18n = inject(LanguageService);
}
