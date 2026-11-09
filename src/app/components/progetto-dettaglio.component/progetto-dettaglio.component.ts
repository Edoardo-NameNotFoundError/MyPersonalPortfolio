import { Component, inject, computed, Type, signal, effect } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

import { PROJECTS } from '../../../assets/project.data';
import { Project } from '../../../models/project.interface';

import { LanguageService } from '../../i18n/language.service';
import { TPipe } from '../../i18n/t.pipe';
import { LPipe } from '../../i18n/l.pipe';

import { NotFoundComponent } from '../not-found-component/not-found-component';

const IN_PAGE_DEMO_REGISTRY: Record<string, () => Promise<Type<unknown>>> = {
  'app-exchange-rate': () => import(
    '../../inPageProjects/exchange-rate/components/exchange-rate.component/exchange-rate'
  ).then(m => m.ExchangeRate)
}


@Component({
  selector: 'app-progetto-dettaglio.component',
  standalone: true,
  imports: [RouterModule, NotFoundComponent, TPipe, LPipe, CommonModule],
  templateUrl: './progetto-dettaglio.component.html',
  styleUrl: './progetto-dettaglio.component.scss',
})
export class ProgettoDettaglioComponent {
  private route = inject(ActivatedRoute);
  readonly i18n = inject(LanguageService);

  private currentSlug = toSignal(
    this.route.paramMap.pipe(map(params => params.get('slug')))
  );

  project = computed (() => {
    const slug = this.currentSlug();
    return PROJECTS.find(proj => proj.id === slug);
  });

  inPageDemo = computed(() => this.hasInPageDemo(this.project()));

  demoComponent = signal<Type<unknown> | null>(null);
  constructor() {
    effect(() => {
      const demoName = this.inPageDemo();

      if (demoName && IN_PAGE_DEMO_REGISTRY[demoName]) {
        IN_PAGE_DEMO_REGISTRY[demoName]().then(compClass => {
          this.demoComponent.set(compClass);
        });
      } else {
        this.demoComponent.set(null);
      }
    });
  }
  
  private hasInPageDemo(project: Project | undefined | null): string | null {
    if(!project) return null;
    
    const inPageDemo = project.inPageDemo;
    
    if(inPageDemo && inPageDemo.trim() !== '') {
      return inPageDemo;
    }
    return null;
  }
}
