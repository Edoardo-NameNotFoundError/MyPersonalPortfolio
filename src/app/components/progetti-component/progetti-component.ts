import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PROJECTS } from '../../assets/project.data';
import { Project } from '../../../models/project.interface';

import { LanguageService } from '../../i18n/language.service';
import { LPipe } from '../../i18n/l.pipe';
import { TPipe } from '../../i18n/t.pipe';

@Component({
  selector: 'app-progetti-component',
  standalone: true,
  imports: [RouterLink, LPipe, TPipe],
  templateUrl: './progetti-component.html',
  styleUrl: './progetti-component.scss',
})
export class ProgettiComponent {
  projectsArray = input<Project[]>([...PROJECTS].sort((a,b) => b.priority - a.priority));
  readonly i18n = inject(LanguageService);
}
