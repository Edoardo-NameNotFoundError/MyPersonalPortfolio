import { Component, inject } from '@angular/core';

import { TPipe } from '../../i18n/t.pipe';
import { LanguageService } from '../../i18n/language.service';

import { PROJECTS } from '../../assets/project.data';

import { ProgettiComponent } from '../progetti-component/progetti-component';

@Component({
  selector: 'app-home-component',
  imports: [TPipe, ProgettiComponent],
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss',
})


export class HomeComponent {
  protected readonly i18n = inject(LanguageService);
  projects = PROJECTS;
  homeProjects = PROJECTS.filter(p => p.showInHome === true);
}
