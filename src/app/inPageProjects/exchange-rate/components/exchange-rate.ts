import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

import { 
  ApiResponse,
  RateInfo,
  ApiCurrencyResponse,
} from '../models/api-response-interface';


@Component({
  selector: 'app-exchange-rate',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './exchange-rate.html',
  styleUrl: './exchange-rate.scss',
})

export class ExchangeRate {
  private http = inject(HttpClient);

  currency = 'USD';
  targetDate: string = new Date().toISOString().split('T')[0];
  amount: number | null = null;

  loading = signal<boolean>(false);
  errorMessage = signal<string>("");
  result : number | null = null;
  appliedRate : number | null = null;
  effectiveDate: string | null = null;

  testApiCall() {
    this.getAllCurrencies();
  }
  
  private async getAllCurrencies() {
    const url = "https://tassidicambio.bancaditalia.it/terzevalute-wf-web/rest/v1.0/currencies";
    
    try {
      const response = await firstValueFrom(this.http.get<ApiCurrencyResponse>(url, {
        headers: {'accept': 'application/json'}
      }));

      const currencyItem = response.currencies.map(c => ({
        name: c.name,
        isoCode: c.isoCode
      }));

      console.log(JSON.stringify(currencyItem, null, 4))

    } catch(err) {
      console.error(`Errore nel recupero delle valute: ${err}`);
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