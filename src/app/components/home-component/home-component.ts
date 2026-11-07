import { Component, inject } from '@angular/core';

import { PROJECTS } from '../../../assets/project.data';

import { TPipe } from '../../i18n/t.pipe';
import { LanguageService } from '../../i18n/language.service';

import { ProgettiComponent } from '../progetti-component/progetti-component';

//Da rimuovere quando finiti i TEST preliminari
import { ExchangeRate } from '../../inPageProjects/exchange-rate/components/exchange-rate.component/exchange-rate';

@Component({
  selector: 'app-home-component',
  imports: [TPipe, ProgettiComponent, ExchangeRate], //Da rimuovere quando finiti i TEST preliminari!!
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss',
})


export class HomeComponent {
  protected readonly i18n = inject(LanguageService);
  filteredProjects = PROJECTS.filter(p => p.showInHome === true); 
  homeProjects = [...this.filteredProjects].sort((a, b) => b.priority - a.priority);
}
