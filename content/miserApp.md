---
id: "miserapp"
showInHome: true
priority: 4
size: "L"
technologies:
  - "Angular 21"
  - "Firebase Auth"
  - "Firestore"
  - "RxJS"
  - "html2pdf.js"
  - "SCSS"
imageUrl: ""
githubUrl: ""
liveUrl: ""
inPageDemo: false
title_it: "MiSerApp - Gestione Presenze"
title_en: "MiSerApp - Timesheet Management"
abstract_it: "Una PWA white-label per la registrazione delle ore lavorative, con generazione automatica di fogli presenze in PDF e firma digitale."
abstract_en: "A white-label PWA for tracking work hours, featuring automatic PDF timesheet generation and digital signatures."
---

### Il Problema
Fornire a un cliente privato un sistema sicuro e flessibile per la rendicontazione delle ore, gestendo casistiche complesse (orari esatti vs monte ore manuale) ed eliminando l'uso di fogli cartacei o Excel.

### La Soluzione
Sviluppo di una Progressive Web App in Angular 21 e Firebase. Il sistema include login tramite whitelist, applicazione batch di template mensili, blocco dei record e generazione client-side di PDF A4 firmati.

### Descrizione
Versione anonimizzata di un gestionale aziendale reale. L'architettura fa forte uso dei Signals di Angular per la reattività della UI, Firestore per la persistenza in tempo reale e html2pdf.js per l'esportazione documentale.

===EN===

### The Problem
Provide a private client with a secure and flexible system for reporting work hours, handling complex scenarios (exact times vs manual bulk hours), and eliminating paper or Excel timesheets.

### The Solution
Development of a Progressive Web App using Angular 21 and Firebase. The system features whitelist-based login, bulk application of monthly templates, record locking, and client-side generation of signed A4 PDFs.

### Description
An anonymized version of a real corporate management tool. The architecture heavily relies on Angular Signals for UI reactivity, Firestore for real-time persistence, and html2pdf.js for document export.