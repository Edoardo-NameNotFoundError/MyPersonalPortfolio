---
id: "full-costing-engine"
showInHome: true
priority: 5
size: "L"
technologies:
- "Python"
- "Docker"
- "Angular"
- "REST API / Auth"
- "Business Intelligence"
imageUrl: ""
githubUrl: ""
inPageDemo: false
liveUrl: ""
title_it: "Cost Allocation Engine - Full Costing B2B"
title_en: "Cost Allocation Engine - B2B Full Costing"
abstract_it: "Un motore algoritmico in Python per calcolare il reale costo industriale orario, automatizzando il controllo di gestione e blindando il pricing aziendale."
abstract_en: "An algorithmic engine built with Python to calculate the true industrial hourly cost, automating management control and shielding corporate pricing."
---

### Il Problema
L'azienda definiva i prezzi basandosi su costi orari teorici (retaggi storici privi di base analitica oggettiva), ignorando l'impatto reale di inefficienze, ore non fatturabili (*Sunk Cost*) e spese di struttura. Questo approccio esponeva l'azienda a continue erosioni di marginalità durante le negoziazioni B2B.

### La Soluzione
Sviluppo di un'architettura software modulare (Backend Python containerizzato in Docker) per l'acquisizione dei log operativi e l'applicazione di un algoritmo proprietario di "doppio ribaltamento". Interfacciandosi con il gestionale aziendale (strutturato in Angular) tramite autenticazione Google protetta, il motore logico opera in 5 fasi:

1. **data fetching:** mediante l'utilizzo di una classe *client* con *refresh token* di sessione per la generazione dinamica di credenziali sicure ed estrazione dati dal server;
2. **data gathering:** raccolta massiva delle timbrature del personale e delle marcature dei macchinari ad alto costo;
3. **data processing:** filtraggio dei log tramite codici operativi e riclassificazione in logica di contabilità per centri di costo;
4. **cost Segregation:** isolamento analitico delle metriche (ore di reparti "puri", assenze retribuite, ore bruciate in preventivi persi, ore produttive da *ROI*).
5. **doppio ribaltamento:** il *core* algoritmico. Stima prima la "Zavorra" divisionale (costi sommersi allocati sul singolo reparto), poi distribuisce il "Calderone" (*Overhead* generale) pesandolo sul rapporto tra le ore produttive della singola divisione e il totale aziendale.

### Descrizione
Un sistema strategico di *Business Intelligence* progettato per il *Board of Directors*. Il software setaccia decine di migliaia di registrazioni orarie, isola le inefficienze e restituisce un sistema di reportistica automatizzato in 5 livelli. Sulla base di questi calcoli, la Direzione ha deliberato una nuova strategia di preventivazione: il software fornisce un *floor price* identificatio nella Tariffa *Break-Even* inattaccabile, trasformando i dati grezzi in un vero e proprio scudo negoziale per proteggere gli utili aziendali.

===EN===

### The Problem
The company set prices based on theoretical hourly costs (historical remnants lacking objective analytical basis), ignoring the real impact of inefficiencies, non-billable hours (Sunk Costs), and overhead. This approach exposed the company to constant margin erosion during B2B negotiations.

### The Solution
Development of a modular software architecture (Dockerized Python backend) to ingest operational logs and apply a proprietary "double allocation" algorithm. Interfacing with the company's Angular-based ERP via a secure Google authentication system, the logic engine operates in 5 phases:

1. **Data Fetching:** Using a client class with a session refresh token to dynamically generate secure credentials and extract server data.
2. **Data Gathering:** Bulk collection of personnel time-tracking records and high-cost machinery logs.
3. **Data Processing:** Filtering logs via operational codes and logically reclassifying them by accounting cost centers.
4. **Cost Segregation:** Analytical isolation of metrics (pure administrative department hours, paid absences, hours burned on lost quotes, productive ROI hours).
5. **Double Allocation:** The algorithmic core. It first estimates the divisional "Sunk Costs" (allocated to the specific department), then distributes the general "Overhead" based on the ratio between the division's productive hours and the company's total productive hours.

### Description
A strategic Business Intelligence system designed for the Board of Directors. The software sifts through thousands of time records, isolates inefficiencies, and outputs an automated 5-level reporting system. Based on these calculations, Management established a new quoting strategy: the software provides an unassailable Break-Even "floor price," transforming raw data into a negotiation shield to protect corporate profits.