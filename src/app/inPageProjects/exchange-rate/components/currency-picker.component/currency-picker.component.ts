import { Component, ElementRef, inject, signal, computed, HostListener, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyItem } from '../../models/api-response-interface';

@Component({
  selector: 'app-currency-picker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './currency-picker.component.html',
  styleUrl: './currency-picker.component.scss',
})
export class CurrencyPickerComponent {
  private elementRef = inject(ElementRef);

  // Da padre
  currencies = input<CurrencyItem[]>([]);
  selectedCurrency = input<CurrencyItem | null>(null);

  // A padre
  currencyChanged = output<CurrencyItem>();
  
  isOpen = signal<boolean>(false);
  
  searchQuery = signal<string>('');

  filteredCurrencies = computed(() => {
    const query = this.searchQuery().trim().toLowerCase();
    const list = this.currencies();

    return list.filter(item => {
      const safeIso = (item.isoCode || '').toLowerCase();
      const safeName = (item.name || '').toLowerCase();

      return safeIso.includes(query) || safeName.includes(query);
    });
  })

  @HostListener('document:click', ['$event'])
    onDocumentClick(event: MouseEvent): void {
      if(!this.elementRef.nativeElement.contains(event.target)) {
        this.isOpen.set(false);
      }
    }
  
    toggleDropdown(): void {
      this.isOpen.update(current => !current);
    }
  
    onSearch(event: Event): void {
      const value = (event.target as HTMLInputElement).value;
      this.searchQuery.set(value);
    }

    selectItem(item: CurrencyItem): void {
      this.currencyChanged.emit(item); 
      this.isOpen.set(false);          
      this.searchQuery.set('');        
    }
}
