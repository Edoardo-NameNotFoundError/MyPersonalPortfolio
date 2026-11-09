export const EXCHANGE_RATE_UI = {
 // --- TESTI PER L'HTML ---
  titleStart: { it: 'Valuta di partenza', en: 'Start Currency' },
  titleTarget: { it: 'Valuta di arrivo', en: 'Target Currency' },
  dateLabel: { it: 'Data di Riferimento:', en: 'Reference Date:' },
  inputLabel: { it: 'Inserisci il numero da convertire:', en: 'Enter amount to convert:' },
  btnCalc: { it: 'Calcola', en: 'Calculate' },
  btnLoading: { it: 'Ricerca in corso...', en: 'Searching...' },
  btnClear: { it: 'Cancella tutto', en: 'Clear all' },
  appliedRate: { it: 'Tasso di cambio applicato:', en: 'Applied exchange rate:' },
  effectiveDate: { it: 'Data effettiva del risultato:', en: 'Effective result date:' },

  // --- MESSAGGI DI ERRORE PER IL TYPESCRIPT ---
  errMissingFields: { 
    it: 'Compila tutti i campi (Importo, Valuta di partenza e arrivo)!', 
    en: 'Please fill in all fields (Amount, Start and Target Currency)!' 
  },
  errNoData: { 
    it: 'Dati non disponibili per le valute selezionate in questa data.', 
    en: 'No data available for the selected currencies on this date.' 
  },
  errFetchCurrencies: {
    it: 'Errore nel recupero delle valute',
    en: 'Error fetching currencies'
  },
  errApi: {
    it: 'Errore API',
    en: 'API Error'
  },
  errJs: {
    it: 'Errore JS',
    en: 'JS Error'
  },
  errNoRates: {
    it: 'Nessun tasso di cambio trovato negli ultimi {days} giorni!',
    en: 'No exchange rate found in the last {days} days!'
  }
};   