---
id: "time-report-custom-app"
showInHome: true
priority: 3
size: "M"
technologies:
- "Google Apps Script (GAS)"
- "JavaScript (ES6)"
- "HTML5 / CSS3"
- "Bootstrap 5"
- "Serverless Architecture"
imageUrl: ""
githubUrl: ""
liveUrl: ""
inPageDemo: ""
title_it: "Time Report Custom - Web App Serverless"
title_en: "Custom Time Report - Serverless Web App"
abstract_it: "Una Web App serverless sicura e dal design premium per tracciare le ore lavorative dei collaboratori, proteggendo i dati e senza impattare la contabilità ufficiale aziendale."
abstract_en: "A secure, premium-designed serverless Web App to track collaborators' working hours, protecting data without impacting the official corporate accounting."
---

### Il Problema
La gestione delle ore lavorative e delle presenze per stagisti non retribuiti (stage curricolare) necessitava di uno strumento agile, che non impattasse e non "sporcasse" la contabilità di commessa dell'applicativo ufficiale (*ERP*) aziendale. Era inoltre fondamentale garantire che i dati inseriti non potessero essere manipolati a posteriori dagli utenti e che l'accesso fosse strettamente limitato al personale autorizzato, evitando dispersioni di dati o visualizzazioni indesiderate.

### La Soluzione
Sviluppo di un'architettura *Serverless* modulare basata interamente sull'infrastruttura aziendale di *Google Workspace* (tramite *Google Apps Script*). Il sistema utilizza un approccio orientato agli oggetti (*OOP*) con un *backend* disaccoppiato in servizi e un *frontend responsive*. L'applicazione opera attraverso 5 fasi logiche:

1. **security guard:** al caricamento, il controller HTTP principale intercetta l'identità dell'utente e la valida contro una *whitelist* ambientale. Agli utenti non autorizzati viene bloccato l'accesso direttamente lato server, esponendo solo una schermata di cortesia;
2. **data fetching:** il *client* interroga asincronamente le API per inizializzare dinamicamente i vincoli del calendario (es. escludendo le date già rendicontate per evitare duplicati);
3. **data validation:** il *payload* viene ispezionato da una classe di validazione dedicata lato *backend* per garantire l'integrità formale ed evitare iniezioni di dati corrotti;
4. **protected persistence:** il salvataggio avviene su un "database" *cloud* (*Google Sheets*) mantenuto invisibile all'utente. Lo script sfrutta un contesto di esecuzione amministrativo (*Admin Context Execution*), blindando l'archivio da accessi diretti;
5. **smart notifications:** generazione automatica di una notifica email tramite template HTML, impostando dinamicamente i parametri di invio (CC all'utente come ricevuta, e *Reply-To* configurato sul mittente reale) per favorire comunicazioni fluide con la Direzione.

### Descrizione
Un'applicazione web flessibile, sicura e scalabile, caratterizzata da un'interfaccia utente premium (*Glassmorphism*, *Dark Mode* nativa e auto-completamento avanzato del testo). L'infrastruttura a "costo zero", ospitata interamente sul *tenant* aziendale, funge da ponte sicuro: raccoglie i dati, li archivia in un ambiente blindato e notifica il management, azzerando le inefficienze operative. Un prodotto *Enterprise-ready* che trasforma la rendicontazione oraria in un processo automatizzato, elegante e senza attriti.

===EN===

### The Problem
Tracking working hours and attendance for unpaid interns (curricular internships) required an agile tool that would not interfere with or clutter the company's official project accounting software (ERP). Furthermore, it was crucial to ensure that submitted data could not be tampered with after the fact and that access was strictly restricted to authorized personnel, preventing data leaks or unauthorized views.

### The Solution
Development of a modular Serverless architecture built entirely on the corporate Google Workspace infrastructure (via Google Apps Script). The system utilizes an Object-Oriented Programming (OOP) approach with a decoupled backend and a responsive frontend. The application operates through 5 logical phases:

1. **Security Guard:** Upon loading, the main HTTP controller intercepts the user's identity and validates it against an environmental whitelist. Unauthorized users are blocked directly on the server side, displaying only a localized courtesy screen.
2. **Data Fetching:** The client asynchronously queries the APIs to dynamically initialize calendar constraints (e.g., excluding already reported dates to prevent duplicates).
3. **Data Validation:** The payload is inspected by a dedicated backend validation class to ensure formal integrity and prevent corrupted data injection.
4. **Protected Persistence:** Data is saved to a cloud "database" (Google Sheets) kept completely invisible to the user. The script leverages an Admin Context Execution, shielding the archive from direct access.
5. **Smart Notifications:** Automatic generation of an email notification via an HTML template, dynamically setting routing parameters (CC to the user as a receipt, and Reply-To mapped to the actual sender) to foster seamless communication with Management.

### Description
A flexible, secure, and scalable web application featuring a premium user interface (Glassmorphism, native Dark Mode, and advanced text auto-completion). The "zero-cost" infrastructure, hosted entirely on the corporate tenant, acts as a secure bridge: it collects data, stores it in a shielded environment, and notifies management, eliminating operational inefficiencies. An Enterprise-ready product that turns time reporting into an automated, elegant, and frictionless process.