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

  today = new Date().toISOString().split('T')[0];
  selectedDate = signal<string>(this.today);

  inputNumber = signal<number | null>(null);

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

  selectCurrency(item: CurrencyItem): void {
    this.selectedCurrency.set(item);
    this.isOpen.set(false);
    this.searchQuery.set('');
    
    this.result = null;
    this.appliedRate = null;
    this.effectiveDate = null;
  }

  onDateChange(event: Event): void {
    const input = (event.target as HTMLInputElement).value;
    this.selectedDate.set(input);
  }

  onRateChange(event:Event): void {
    const eurInput = (event.target as HTMLInputElement).value;
    this.inputNumber.set(eurInput ? parseFloat(eurInput) : null);
  }

  private calculateRate(eurValue: number, exchangeRate: number): number | null {
    if(!eurValue || !exchangeRate || exchangeRate === 0) return null;
    return Math.round(eurValue * exchangeRate * 100)/100;
  }

  async fetchRate(): Promise<void> {
    const currency = this.selectedCurrency();

    if(!currency) {
      this.errorMessage.set("Seleziona una valuta!");
      return;
    }

    this.isLoading.set(true);

    const rateInfo = await this.getExchangeRate(this.selectedDate(), currency.isoCode);

    if(rateInfo) {
      this.appliedRate = rateInfo.avgRate;
      
      const dateObject = new Date(rateInfo.referenceDate);
      const fomrattedDate: string = dateObject.toLocaleDateString('it-IT', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric'
      })

      this.effectiveDate = fomrattedDate;

      const currentAmount = this.inputNumber();
      if(currentAmount && this.appliedRate) {
        this.result = this.calculateRate(currentAmount, this.appliedRate);
      }
    }
    this.isLoading.set(false);
  }
  
  private async getAllCurrencies(): Promise<void>{
    this.errorMessage.set('');
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
      this.errorMessage.set(`Errore nel recupero delle valute: ${err}`);
    } finally {
      this.isLoading.set(false);
    }
  }

  private async getExchangeRate(targetDate: string, targetCurrency: string, maxDaysBack=7): Promise<RateInfo | null> {
    this.errorMessage.set('');
    const currentDate = new Date(targetDate);

    for(let i = 0; i <= maxDaysBack; i++) {
      const formattedDate = currentDate.toISOString().split('T')[0];
      const url = `https://tassidicambio.bancaditalia.it/terzevalute-wf-web/rest/v1.0/dailyRates?referenceDate=${formattedDate}&currencyIsoCode=EUR&lang=it`;

      try {
      const response = await firstValueFrom(this.http.get<ApiResponse>(url, {
        headers: {'accept': 'application/json'}
      }));

      const match = response.rates?.find(resp => resp.isoCode === targetCurrency);
      
      if(match) {
        this.errorMessage.set('');
        return match;
      }

    } catch(err: unknown) {
        if (err instanceof HttpErrorResponse) {

          if (err.status !== 400 && err.status !== 404) {
            this.errorMessage.set(`Errore API: ${err.status}: riprova più tardi...`);
            return null;
          }
        } else if(err instanceof Error) {
            this.errorMessage.set(`Errore JS: ${err.message}`);
          }
        }

        currentDate.setUTCDate(currentDate.getUTCDate() - 1);
    }

    this.errorMessage.set(`Nessun tasso di cambio trovato negli ultimi ${maxDaysBack} giorni!`);
    return null;
  }
}