export interface RateInfo {
  isoCode: string,
  avgRate: number,
  referenceDate: string
}

export interface ApiResponse {
  rates: RateInfo[]
}

export interface ApiCurrencyResponse {
    currencies : {
        isoCode: string,
        name: string
    }[];
}