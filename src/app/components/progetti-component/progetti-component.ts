import { Component, computed, inject, input, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { PROJECTS } from '../../../assets/project.data';
import { Project } from '../../../models/project.interface';

import { LanguageService } from '../../i18n/language.service';
import { LPipe } from '../../i18n/l.pipe';
import { TPipe } from '../../i18n/t.pipe';

type FilterSize = Project['size'] | 'ALL';

@Component({
  selector: 'app-progetti-component',
  standalone: true,
  imports: [RouterLink, LPipe, TPipe],
  templateUrl: './progetti-component.html',
  styleUrl: './progetti-component.scss',
})


export class ProgettiComponent {
  public router = inject(Router)

  selectedSize = signal<FilterSize>('ALL');

  showOnlyLive = signal<boolean>(false);

  projectsArray = input<Project[]>([...PROJECTS].sort((a,b) => b.priority - a.priority));
  readonly i18n = inject(LanguageService);

  availableSizes = computed(() => {
    const allSizes = this.projectsArray().map(p => p.size);
    const uniqueSizes = new Set(allSizes);

    return ['ALL', ...uniqueSizes] as FilterSize[];
  })

  filteredProjects = computed(() => {
    let filtered = this.projectsArray();

    if(this.showOnlyLive()) {
      filtered = filtered.filter(p => this.hasLiveBadge(p));
    }

    if(this.selectedSize() !== 'ALL') {
      filtered = filtered.filter(p => p.size === this.selectedSize());
    }

    return filtered;
  })

  hasLiveBadge(project: Project): boolean {
    if(!project) return false;

    const hasLiveUrl = !!project.liveUrl?.trim();
    const hasInPageDemo = !!project?.inPageDemo.trim();

    return hasLiveUrl || hasInPageDemo;

  }

  toggleShowLive(event: Event)  {
    const isChecked = event.target as HTMLInputElement;
    this.showOnlyLive.set(isChecked.checked);
  }

  onSizeChange(event: Event) {
    const selectedElement = event.target as HTMLSelectElement;
    this.selectedSize.set(selectedElement.value as FilterSize);
  }

  isInProject(): boolean {
    return this.router.url.includes('/progetti');
  }
}
