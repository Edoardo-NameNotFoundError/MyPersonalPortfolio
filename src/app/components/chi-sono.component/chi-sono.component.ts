import { Component, inject } from '@angular/core';

import { LanguageService } from '../../i18n/language.service';
import { LPipe } from '../../i18n/l.pipe';

import { BIOGRAPHY_DATA } from '../../../assets/biography.data';

@Component({
  selector: 'app-chi-sono.component',
  imports: [LPipe],
  templateUrl: './chi-sono.component.html',
  styleUrl: './chi-sono.component.scss',
})
export class ChiSonoComponent {
  protected readonly i18n = inject(LanguageService);
  public bio = BIOGRAPHY_DATA;
}
