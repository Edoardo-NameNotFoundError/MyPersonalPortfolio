export interface RateInfo {
  isoCode: string,
  avgRate: number,
  referenceDate: string
}

export interface ApiResponse {
  rates: RateInfo[]
}

export interface CurrencyItem {
  isoCode: string,
  name: string
}

export interface ApiCurrencyResponse {
    currencies : CurrencyItem[];
}