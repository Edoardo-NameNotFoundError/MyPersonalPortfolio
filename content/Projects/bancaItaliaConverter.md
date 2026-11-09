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
- "Angular"
- "TypeScript"
imageUrl: ""
githubUrl: ""
inPageDemo: "app-exchange-rate"
liveUrl: ""
title_it: "Convertitore Valute Banca d'Italia"
title_en: "Bank of Italy Exchange Rate Converter"
abstract_it: "Un'utility Python per automatizzare il recupero dei tassi di cambio ufficiali per la fatturazione, evoluta in una Web App Angular reattiva."
abstract_en: "A Python utility to automate the retrieval of official exchange rates for invoicing, evolved into a reactive Angular Web App."
---

### Il Problema
Ottenere rapidamente il tasso di cambio ufficiale per la fatturazione in una data specifica, aggirando il problema dei giorni festivi o weekend in cui la Banca non pubblica i dati, ed eseguire direttamente il calcolo di conversione.

### La Soluzione
Script Python che interroga le API REST pubbliche della Banca d'Italia, implementando una logica ricorsiva per trovare l'ultimo giorno lavorativo utile e formattare il risultato per le fatture.

### Da Utility da Terminale a Web App Architetturale
Questo progetto è il classico esempio di come un'esigenza amministrativa noiosa (recuperare i tassi di cambio per le fatture) possa trasformarsi in un laboratorio di ingegneria del software: questo componente, infatti, può essere tranquillamente utilizzato come strumento di supporto in un gestionale più ampio per accorciare i tempi di contabilizzazione ed efficientare maggiormente il processo, dal momento che viene tenuta traccia:
- Della data (a ritroso) effettivamente utilizzata per il cambio;
- Del risultato della conversione.

#### Le fasi dello sviluppo
Presento di seguito le due fasi del progetto.

**Fase 1: Lo Script Python (La logica Core)**
Il progetto originale è una CLI (Command Line Interface) scritta in Python. L'approccio è diretto e pragmatico:
- **Ricorsione Temporale:** Utilizza un ciclo `while` che, in caso di assenza di dati (es. di domenica), scala a ritroso i giorni fino a trovare l'ultimo tasso ufficiale pubblicato.
- **UX da Terminale:** Sfrutta i codici ANSI per un'interfaccia a colori con un effetto *typewriter* per rendere l'esperienza utente a riga di comando più accattivante.
- **Output Pratico:** Genera automaticamente la riga di commento pronta per essere copiata e incollata nei documenti fiscali (ideale per fornire al Commercialista l'indicazione esatta del tasso di cambio utilizzato, del giorno di riferimento e dell'esito del calcolo di conversione).

**Fase 2: L'evoluzione Web in Angular**
L'esigenza di mostrare una demo interattiva su questo sito ha spinto il progetto verso una riscrittura completa in TypeScript per il web. Il risultato è un'architettura *Enterprise-grade* basata sui nuovi standard di Angular, ovvero:
- **Motore di "Cross-Rate" Matematico:** Le API della Banca ragionano con l'Euro come base. L'app implementa un calcolo incrociato (`targetRate / startRate`) che permette di convertire direttamente qualsiasi valuta in un'altra (es. Yen in Dollari), scaricando un solo array di dati e abbattendo le chiamate di rete.
- **Reattività Assoluta (Signals):** Ogni input dell'utente (cifra digitata, cambio data, inversione valute) aggiorna il DOM chirurgicamente in tempo reale, senza dover richiamare l'API.
- **Clean Code & Early Exit:** L'algoritmo previene chiamate di rete inutili. Se si prova a convertire una valuta in sé stessa (es. USD in USD), il codice intercetta l'azione ed esegue un *early exit*, restituendo istantaneamente il tasso di 1.
- **Gestione Dinamica dell'Interfaccia:** Attraverso l'uso di `NgComponentOutlet` e di un record di dizionario TypeScript, il componente viene iniettato dinamicamente nella pagina a partire dai metadati Markdown.

===EN===

### The Problem
Quickly obtain the official exchange rate for invoicing on a specific date, bypassing the issue of holidays or weekends when the Bank does not publish data, and directly execute the conversion calculation.

### The Solution
A Python script that queries the Bank of Italy's public REST APIs, implementing a fallback logic to find the latest valid business day and format the result for invoices.

### From CLI Utility to Architectural Web App
This project is a prime example of how a tedious administrative need (retrieving exchange rates for invoices) can evolve into a software engineering lab. This component, in fact, can easily be used as a support tool within a broader management system to shorten accounting times and further streamline the process, since it keeps track of:
- The (fallback) date actually used for the exchange rate;
- The result of the conversion.

#### Development Phases
Below are the two phases of the project's development.

**Phase 1: The Python Script (Core Logic)**
The original project is a CLI (Command Line Interface) written in Python. The approach is straightforward and pragmatic:
- **Temporal Recursion:** It uses a `while` loop that, in the absence of data (e.g., on Sundays), steps backwards through the days until it finds the latest published official rate.
- **Terminal UX:** It leverages ANSI codes for a colorful interface with a *typewriter* effect to make the command-line experience more engaging.
- **Practical Output:** It automatically generates the comment line ready to be copied and pasted into tax documents (ideal for providing the accountant with the exact exchange rate used, the reference date, and the conversion result).

**Phase 2: The Angular Web Evolution**
The need to showcase an interactive demo on this site pushed the project towards a complete TypeScript rewrite for the web. The result is an *Enterprise-grade* architecture based on the latest Angular standards:
- **Mathematical "Cross-Rate" Engine:** The Bank's APIs use the Euro as a baseline. The app implements a cross-calculation (`targetRate / startRate`) that allows direct conversion between any two currencies (e.g., Yen to Dollars) by downloading a single data array, thus drastically reducing network calls.
- **Absolute Reactivity (Signals):** Every user input (typed digit, date change, currency swap) updates the DOM surgically in real-time, without needing to recall the API.
- **Clean Code & Early Exit:** The algorithm prevents useless network calls. If a user tries to convert a currency into itself (e.g., USD to USD), the code intercepts the action and executes an *early exit*, instantly returning a rate of 1.
- **Dynamic Interface Management:** Through the use of `NgComponentOutlet` and a TypeScript dictionary record, the component is dynamically injected into the page directly from the Markdown metadata.