import { 
  Component, 
  ElementRef,
  inject,
  OnInit,
  signal, 
  computed,
  HostListener 
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

import { 
  ApiResponse,
  RateInfo,
  ApiCurrencyResponse,
  CurrencyItem,
} from '../models/api-response-interface';


@Component({
  selector: 'app-exchange-rate',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './exchange-rate.html',
  styleUrl: './exchange-rate.scss',
})

export class ExchangeRate implements OnInit {
  private http = inject(HttpClient);
  private elementRef = inject(ElementRef);

  isOpen = signal<boolean>(false);
  isLoading = signal<boolean>(false);
  errorMessage = signal<string>("");

  currencies = signal<CurrencyItem[]>([]);
  searchQuery = signal<string>('');
  selectedCurrency = signal<CurrencyItem | null>(null);

  result : number | null = null;
  appliedRate : number | null = null;
  effectiveDate: string | null = null;

  filteredCurrencies = computed(() => {
    const query = this.searchQuery().trim().toLowerCase();
    const list = this.currencies();

    return list.filter(item => {
      const safeIso = (item.isoCode || '').toLowerCase();
      const safeName = (item.name || '').toLowerCase();

      return safeIso.includes(query) || safeName.includes(query);
    });
  })

  ngOnInit(): void {
    this.getAllCurrencies();
  }

  @HostListener('document: click', ['$event'])
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

  selectCurrency(item: CurrencyItem): void {
    this.selectedCurrency.set(item);
    this.isOpen.set(false);
    this.searchQuery.set('');
  }
  
  private async getAllCurrencies(): Promise<void>{
    this.isLoading.set(true);

    const url = "https://tassidicambio.bancaditalia.it/terzevalute-wf-web/rest/v1.0/currencies";
    
    try {
      const response = await firstValueFrom(this.http.get<ApiCurrencyResponse>(url, {
        headers: {'accept': 'application/json'}
      }));

      this.currencies.set(
        response.currencies.map(c => ({
          name: c.name,
          isoCode: c.isoCode
        }))
      )

    } catch(err: unknown) {
      console.error(`Errore nel recupero delle valute: ${err}`);
    } finally {
      this.isLoading.set(false);
    }
  }

  private async getExchageRate(date: string, targetCurrency: string): Promise<RateInfo | null> {
    const url = `https://tassidicambio.bancaditalia.it/terzevalute-wf-web/rest/v1.0/dailyRates?referenceDate=${date}&currencyIsoCode=EUR&lang=it`;

    try {
      const response = await firstValueFrom(this.http.get<ApiResponse>(url, {
        headers: {'accept': 'application/json'}
      }));

      const match = response.rates?.find(resp => resp.isoCode === targetCurrency);
      console.log(match)
      return match || null;

    } catch(err: unknown) {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 400 || err.status === 404) {
            console.error(`Errore HTTP ${err.status}`);
            return null;
          }
          console.error(`Errore API: ${err.message}`);
          return null;
        }
        
        if (err instanceof Error) {
          console.error(`Errore JS: ${err.message}`);
        }
        
        return null;
    }
  }
}