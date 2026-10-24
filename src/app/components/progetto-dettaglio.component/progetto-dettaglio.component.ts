import { Component, inject, computed } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

import { PROJECTS } from '../../assets/project.data';

import { LanguageService } from '../../i18n/language.service';
import { TPipe } from '../../i18n/t.pipe';
import { LPipe } from '../../i18n/l.pipe';

import { NotFoundComponent } from '../not-found-component/not-found-component';


@Component({
  selector: 'app-progetto-dettaglio.component',
  standalone: true,
  imports: [RouterModule, NotFoundComponent, TPipe, LPipe],
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
}
