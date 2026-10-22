import { Component, inject } from '@angular/core';

import { PROJECTS } from '../../assets/project.data';
import { LanguageService } from '../../i18n/language.service';
import { LocalizedString } from '../../../models/project.interface';

@Component({
  selector: 'app-progetti-component',
  standalone: true,
  imports: [],
  templateUrl: './progetti-component.html',
  styleUrl: './progetti-component.scss',
})
export class ProgettiComponent {
  readonly projectsArray = PROJECTS;
  readonly langService = inject(LanguageService);

  getText(value: string | LocalizedString): string {
    if(typeof value === "string") return value;
    return value[this.langService.lang()];
  }

  getProjectLabel(value: string): string {
    return this.langService.t(`projects.labels.${value}`);
  }

}
