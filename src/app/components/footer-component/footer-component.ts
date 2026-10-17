import { Component } from '@angular/core';
import { TPipe } from '../../i18n/t.pipe';

@Component({
  selector: 'app-footer-component',
  standalone: true,
  imports: [TPipe],
  templateUrl: './footer-component.html',
  styleUrl: './footer-component.scss',
})

export class FooterComponent {
  protected readonly year = new Date().getFullYear();
  protected readonly name = 'Edoardo Giossi';
  protected readonly repoURL = 'https://www.github.com';

  protected readonly links = [
    { label: 'GitHub', url: 'https://github.com' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in' }
  ];

  scrollTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
}
