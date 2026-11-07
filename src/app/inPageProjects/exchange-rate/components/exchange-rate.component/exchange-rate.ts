import { Component, inject, OnInit, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';

import { 
  ApiResponse,
  RateInfo,
  ApiCurrencyResponse,
  CurrencyItem,
} from '../../models/api-response-interface';

import { CurrencyPickerComponent } from '../currency-picker.component/currency-picker.component';


@Component({
  selector: 'app-exchange-rate',
  standalone: true,
  imports: [CommonModule, FormsModule, CurrencyPickerComponent],
  templateUrl: './exchange-rate.html',
  styleUrl: './exchange-rate.scss',
})

export class ExchangeRate implements OnInit {
  private http = inject(HttpClient);

  today = new Date().toISOString().split('T')[0];

  result : number | null = null;
  appliedRate : number | null = null;
  
  effectiveDate: string | null = null;

  isLoading = signal<boolean>(false);
  
  errorMessage = signal<string>("");
  selectedDate = signal<string>(this.today);

  currencies = signal<CurrencyItem[]>([]);
  startCurrency = signal<CurrencyItem | null>(null);
  targetCurrency = signal<CurrencyItem | null>(null);

  inputNumber = signal<number | null>(null);

  ngOnInit(): void {
    this.getAllCurrencies();
  }

  onCurrencySelected(item: CurrencyItem, fieldName: 'start' | 'target'): void {
    switch(fieldName) {
      case('start'):
        this.startCurrency.set(item);
        break;
      case('target'):
        this.targetCurrency.set(item);
        break;
    }

    this.resetOutputValues();
  }

  switchCurrencies(): void {
    const oldStart = this.startCurrency();
    this.startCurrency.set(this.targetCurrency());
    this.targetCurrency.set(oldStart);

    this.resetOutputValues();
  }

  resetOutputValues(): void {
    this.result = null;
    this.appliedRate = null;
    this.effectiveDate = null;
  }

  clearAllFields(): void {
    this.startCurrency.set(null);
    this.targetCurrency.set(null);
    this.inputNumber.set(null);
    this.selectedDate.set(this.today);

    this.resetOutputValues();
  }

  onDateChange(event: Event): void {
    const input = (event.target as HTMLInputElement).value;
    this.selectedDate.set(input);

    this.resetOutputValues();
  }

  onRateChange(event:Event): void {
    const numberInput = (event.target as HTMLInputElement).value;
    const amount = numberInput ? parseFloat(numberInput) : null;

    this.inputNumber.set(amount);
    
    if(this.appliedRate) {
      if(amount) {
        this.result = Math.round((amount * this.appliedRate)*100)/100
      } else {
        this.result = null;
      }
    }
  }

  private calculateCrossRate(amount: number, startRate: number, targetRate: number): number | null {
    if (!amount || startRate === 0) return null;
    
    const effectiveExchangeRate = targetRate / startRate;
    return Math.round((amount * effectiveExchangeRate) * 100) / 100;
  }

  async fetchRate(): Promise<void> {
    const startCurr = this.startCurrency();
    const targetCurr = this.targetCurrency();
    const amount = this.inputNumber();

    if (!startCurr || !targetCurr || !amount) {
      this.errorMessage.set("Compila tutti i campi (Importo, Valuta di partenza e arrivo)!");
      return;
    }

    this.isLoading.set(true);

    const ratesArray = await this.getExchangeRatesForDate(this.selectedDate());

    if (ratesArray) {
      const startRate = startCurr.isoCode === 'EUR' ? 1 : ratesArray.find(r => r.isoCode === startCurr.isoCode)?.avgRate;
      const targetRate = targetCurr.isoCode === 'EUR' ? 1 : ratesArray.find(r => r.isoCode === targetCurr.isoCode)?.avgRate;

      if (startRate && targetRate) {
        this.appliedRate = Math.round((targetRate / startRate) * 10000) / 10000;
        
        const dateObject = new Date(ratesArray[0].referenceDate);
        this.effectiveDate = dateObject.toLocaleDateString('it-IT', {
          day: 'numeric', month: 'numeric', year: 'numeric'
        });

        this.result = this.calculateCrossRate(amount, startRate, targetRate);
      } else {
        this.errorMessage.set(`Dati non disponibili per ${startCurr.isoCode} o ${targetCurr.isoCode} in questa data.`);
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

  private async getExchangeRatesForDate(targetDate: string, maxDaysBack = 7): Promise<RateInfo[] | null> {
    this.errorMessage.set('');

    const startIso = this.startCurrency()?.isoCode;
    const targetIso = this.targetCurrency()?.isoCode;

    if(startIso && targetIso && startIso === targetIso) {
      return [{
        isoCode: startIso,
        avgRate: 1,
        referenceDate: targetDate
      }] as RateInfo[];
    }

    const currentDate = new Date(targetDate);

    for (let i = 0; i <= maxDaysBack; i++) {
      const formattedDate = currentDate.toISOString().split('T')[0];
      
      const url = `https://tassidicambio.bancaditalia.it/terzevalute-wf-web/rest/v1.0/dailyRates?referenceDate=${formattedDate}&currencyIsoCode=EUR&lang=it`;

      try {
        const response = await firstValueFrom(this.http.get<ApiResponse>(url, {
          headers: {'accept': 'application/json'}
        }));

        if (response.rates && response.rates.length > 0) {
          this.errorMessage.set('');
          return response.rates;
        }

      } catch (err: unknown) {
        if (err instanceof HttpErrorResponse) {
          if (err.status !== 400 && err.status !== 404) {
            this.errorMessage.set(`Errore API (${err.status}): riprova più tardi...`);
            return null;
          }
        } else if (err instanceof Error) {
          this.errorMessage.set(`Errore JS: ${err.message}`);
        }
      }

      currentDate.setUTCDate(currentDate.getUTCDate() - 1);
    }

    this.errorMessage.set(`Nessun tasso di cambio trovato negli ultimi ${maxDaysBack} giorni!`);
    return null;
  }
}