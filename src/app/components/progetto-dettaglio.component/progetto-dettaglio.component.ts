import { Component, inject, computed } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

import { LanguageService } from '../../i18n/language.service';
import { PROJECTS } from '../../assets/project.data';
import { LocalizedString } from '../../../models/project.interface';

import { NotFoundComponent } from '../not-found-component/not-found-component';

@Component({
  selector: 'app-progetto-dettaglio.component',
  standalone: true,
  imports: [RouterModule, NotFoundComponent],
  templateUrl: './progetto-dettaglio.component.html',
  styleUrl: './progetto-dettaglio.component.scss',
})
export class ProgettoDettaglioComponent {
  i18n = inject(LanguageService);
  private route = inject(ActivatedRoute);

  private currentSlug = toSignal(
    this.route.paramMap.pipe(map(params => params.get('slug')))
  );

  project = computed (() => {
    const slug = this.currentSlug();
    return PROJECTS.find(proj => proj.id === slug);
  });

  getText(value: string | LocalizedString | undefined): string {
    if(!value) return '';
    if(typeof value === 'string') return value;
    return value[this.i18n.lang()];
  }
}
