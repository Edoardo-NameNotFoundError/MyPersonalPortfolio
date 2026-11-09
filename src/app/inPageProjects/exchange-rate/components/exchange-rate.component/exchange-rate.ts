import { Component, computed, effect, inject, signal} from '@angular/core';
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

import { EXCHANGE_RATE_UI } from '../../i18n/exchange-rate.i18n';

import { LanguageService } from '../../../../i18n/language.service';
import { LPipe } from '../../../../i18n/l.pipe';


@Component({
  selector: 'app-exchange-rate',
  standalone: true,
  imports: [CommonModule, FormsModule, CurrencyPickerComponent, LPipe],
  templateUrl: './exchange-rate.html',
  styleUrl: './exchange-rate.scss',
})

export class ExchangeRate {
  private http = inject(HttpClient);
  protected readonly i18n = inject(LanguageService);
  public ui = EXCHANGE_RATE_UI;

  constructor() {
    effect(() => {
      const lang = this.i18n.lang();
      this.getAllCurrencies(lang);
    })
  }

  today = new Date().toISOString().split('T')[0];

  private numberFormatter = computed(() => {
    const locale = this.i18n.lang() === 'it' ? 'it-IT' : 'en-US';
    return new Intl.NumberFormat(locale, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  });

  inputNumber = signal<number | null>(null);
  formattedInput = computed(() =>{
    const val = this.inputNumber();
    return val === null ? null : this.numberFormatter().format(val);
  });

  rawResult = signal<number | null>(null);
  formattedResult = computed(() => {
    const val = this.rawResult();
    return val === null ? null : this.numberFormatter().format(val);
  });

  rawAppliedRate = signal<number | null>(null);
  formattedAppliedRate = computed(() =>{
    const val = this.rawAppliedRate();
    if(val === null) return null;

    const locale = this.i18n.lang() === 'it' ? 'it-IT' : 'en-US';
    return new Intl.NumberFormat(locale, {
      minimumFractionDigits: 5,
      maximumFractionDigits: 5
    }).format(val);
  });
  
  rawEffectiveDate = signal<Date | null>(null);
  effectiveDate = computed(() => {
    const date = this.rawEffectiveDate();
    if(!date) return;

    const locale = this.i18n.lang() === 'it' ? 'it-IT' : 'en-US';
    return date.toLocaleDateString(locale, {
      day: '2-digit', month: '2-digit', year: 'numeric' 
    });
  });

  isLoading = signal<boolean>(false);
  
  errorMessage = signal<string>("");
  selectedDate = signal<string>(this.today);

  currencies = signal<CurrencyItem[]>([]);
  startCurrency = signal<CurrencyItem | null>(null);
  targetCurrency = signal<CurrencyItem | null>(null);

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
    this.rawResult.set(null);
    this.rawAppliedRate.set(null);
    this.rawEffectiveDate.set(null);
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

    const rate = this.rawAppliedRate();
    if(rate) {
      if(amount) {
        this.rawResult.set(Math.round((amount * rate * 10000) / 10000));
      } else {
        this.rawResult.set(null);
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
    const currentLang = this.i18n.lang();

    if (!startCurr || !targetCurr || !amount) {
      this.errorMessage.set(this.ui.errMissingFields[currentLang]);
      return;
    }

    this.isLoading.set(true);

    const ratesArray = await this.getExchangeRatesForDate(this.selectedDate());

    if (ratesArray) {
      const startRate = startCurr.isoCode === 'EUR' ? 1 : ratesArray.find(r => r.isoCode === startCurr.isoCode)?.avgRate;
      const targetRate = targetCurr.isoCode === 'EUR' ? 1 : ratesArray.find(r => r.isoCode === targetCurr.isoCode)?.avgRate;

      if (startRate && targetRate) {
        this.rawAppliedRate.set(Math.round((targetRate / startRate) * 10000) / 10000);
        
        const dateObject = new Date(ratesArray[0].referenceDate);
        this.rawEffectiveDate.set(dateObject);

        this.rawResult.set(this.calculateCrossRate(amount, startRate, targetRate));
      } else {
        this.errorMessage.set(this.ui.errNoData[currentLang]);
      }
    }
    
    this.isLoading.set(false);
  }
  
  private async getAllCurrencies(lang: 'it' | 'en'): Promise<void>{
    this.errorMessage.set('');
    this.isLoading.set(true);
    
    const url = `https://tassidicambio.bancaditalia.it/terzevalute-wf-web/rest/v1.0/currencies?lang=${lang}`;
    
    
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
      this.errorMessage.set(`${this.ui.errFetchCurrencies[lang]}: ${err}`);
    } finally {
      this.isLoading.set(false);
    }
  }

  private async getExchangeRatesForDate(targetDate: string, maxDaysBack = 7): Promise<RateInfo[] | null> {
    this.errorMessage.set('');

    const startIso = this.startCurrency()?.isoCode;
    const targetIso = this.targetCurrency()?.isoCode;
    const currentLang = this.i18n.lang();

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
            this.errorMessage.set(`${this.ui.errApi[currentLang]} (${err.status})`);
            return null;
          }
        } else if (err instanceof Error) {
          const errorMsg = this.ui.errNoRates[currentLang].replace('{days}', maxDaysBack.toString());
          this.errorMessage.set(errorMsg);
        }
      }

      currentDate.setUTCDate(currentDate.getUTCDate() - 1);
    }

    this.errorMessage.set(`Nessun tasso di cambio trovato negli ultimi ${maxDaysBack} giorni!`);
    return null;
  }
}