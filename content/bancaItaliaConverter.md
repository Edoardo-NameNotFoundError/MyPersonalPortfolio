---
id: "banca-italia-converter"
showInHome: false
priority: 3
size: "S"
technologies:
  - "Python"
  - "Requests"
  - "REST API"
  - "CustomTkinter"
imageUrl: ""
githubUrl: ""
inPageDemo: "app-exchange-rate"
liveUrl: ""
title_it: "Convertitore Valute Banca d'Italia"
title_en: "Bank of Italy Exchange Rate Converter"
abstract_it: "Un'utility Python per automatizzare il recupero dei tassi di cambio ufficiali per la fatturazione, aggirando i giorni di chiusura dei mercati."
abstract_en: "A Python utility to automate the retrieval of official exchange rates for invoicing, bypassing market closure days."
---

### Il Problema
Ottenere rapidamente il tasso di cambio ufficiale per la fatturazione in una data specifica, aggirando il problema dei giorni festivi o weekend in cui la Banca non pubblica i dati.

### La Soluzione
Script Python che interroga le API REST pubbliche della Banca d'Italia, implementando una logica ricorsiva per trovare l'ultimo giorno lavorativo utile e formattare il risultato per le fatture.

### Descrizione
Una piccola ma utilissima utility da terminale (con prototipo GUI in CustomTkinter) per automatizzare e velocizzare un noioso processo amministrativo manuale.

===EN===

### The Problem
Quickly obtain the official exchange rate for invoicing on a specific date, bypassing the issue of holidays or weekends when the Bank does not publish data.

### The Solution
Python script that queries the Bank of Italy's public REST APIs, implementing a fallback logic to find the latest valid business day and format the result for invoices.

### Description
A small but very useful CLI utility (with a GUI prototype in CustomTkinter) to automate and speed up a tedious manual administrative process.