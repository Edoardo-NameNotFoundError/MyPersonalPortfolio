// File generato automaticamente dallo script build-content.cjs - NON MODIFICARE A MANO!!

import { Project } from '../models/project.interface';

export const PROJECTS: Project[] = [
    // OGGETTO GENERATO DALL'ORIGINE: content/bancaItaliaConverter.md
    {
        "id": "banca-italia-converter",
        "showInHome": false,
        "priority": 3,
        "size": "S",
        "technologies": [
            "Python",
            "Requests",
            "REST API",
            "CustomTkinter"
        ],
        "inPageDemo": true,
        "liveUrl": "",
        "githubUrl": "",
        "imageUrl": "",
        "title": {
            "it": "Convertitore Valute Banca d'Italia",
            "en": "Bank of Italy Exchange Rate Converter"
        },
        "abstract": {
            "it": "Un'utility Python per automatizzare il recupero dei tassi di cambio ufficiali per la fatturazione, aggirando i giorni di chiusura dei mercati.",
            "en": "A Python utility to automate the retrieval of official exchange rates for invoicing, bypassing market closure days."
        },
        "bodyHtml": {
            "it": "<h3>Il Problema</h3>\n<p>Ottenere rapidamente il tasso di cambio ufficiale per la fatturazione in una data specifica, aggirando il problema dei giorni festivi o weekend in cui la Banca non pubblica i dati.</p>\n<h3>La Soluzione</h3>\n<p>Script Python che interroga le API REST pubbliche della Banca d&#39;Italia, implementando una logica ricorsiva per trovare l&#39;ultimo giorno lavorativo utile e formattare il risultato per le fatture.</p>\n<h3>Descrizione</h3>\n<p>Una piccola ma utilissima utility da terminale (con prototipo GUI in CustomTkinter) per automatizzare e velocizzare un noioso processo amministrativo manuale.</p>\n",
            "en": "<h3>The Problem</h3>\n<p>Quickly obtain the official exchange rate for invoicing on a specific date, bypassing the issue of holidays or weekends when the Bank does not publish data.</p>\n<h3>The Solution</h3>\n<p>Python script that queries the Bank of Italy&#39;s public REST APIs, implementing a fallback logic to find the latest valid business day and format the result for invoices.</p>\n<h3>Description</h3>\n<p>A small but very useful CLI utility (with a GUI prototype in CustomTkinter) to automate and speed up a tedious manual administrative process.</p>\n"
        }
    },

    // OGGETTO GENERATO DALL'ORIGINE: content/calcolatoreOrari.md
    {
        "id": "full-costing-engine",
        "showInHome": true,
        "priority": 5,
        "size": "L",
        "technologies": [
            "Python",
            "Docker",
            "Angular",
            "REST API / Auth",
            "Business Intelligence"
        ],
        "inPageDemo": false,
        "liveUrl": "",
        "githubUrl": "",
        "imageUrl": "",
        "title": {
            "it": "Cost Allocation Engine - Full Costing B2B",
            "en": "Cost Allocation Engine - B2B Full Costing"
        },
        "abstract": {
            "it": "Un motore algoritmico in Python per calcolare il reale costo industriale orario, automatizzando il controllo di gestione e blindando il pricing aziendale.",
            "en": "An algorithmic engine built with Python to calculate the true industrial hourly cost, automating management control and shielding corporate pricing."
        },
        "bodyHtml": {
            "it": "<h3>Il Problema</h3>\n<p>L&#39;azienda definiva i prezzi basandosi su costi orari teorici (retaggi storici privi di base analitica oggettiva), ignorando l&#39;impatto reale di inefficienze, ore non fatturabili (<em>Sunk Cost</em>) e spese di struttura. Questo approccio esponeva l&#39;azienda a continue erosioni di marginalità durante le negoziazioni B2B.</p>\n<h3>La Soluzione</h3>\n<p>Sviluppo di un&#39;architettura software modulare (Backend Python containerizzato in Docker) per l&#39;acquisizione dei log operativi e l&#39;applicazione di un algoritmo proprietario di &quot;doppio ribaltamento&quot;. Interfacciandosi con il gestionale aziendale (strutturato in Angular) tramite autenticazione Google protetta, il motore logico opera in 5 fasi:</p>\n<ol>\n<li><strong>data fetching:</strong> mediante l&#39;utilizzo di una classe <em>client</em> con <em>refresh token</em> di sessione per la generazione dinamica di credenziali sicure ed estrazione dati dal server;</li>\n<li><strong>data gathering:</strong> raccolta massiva delle timbrature del personale e delle marcature dei macchinari ad alto costo;</li>\n<li><strong>data processing:</strong> filtraggio dei log tramite codici operativi e riclassificazione in logica di contabilità per centri di costo;</li>\n<li><strong>cost Segregation:</strong> isolamento analitico delle metriche (ore di reparti &quot;puri&quot;, assenze retribuite, ore bruciate in preventivi persi, ore produttive da <em>ROI</em>).</li>\n<li><strong>doppio ribaltamento:</strong> il <em>core</em> algoritmico. Stima prima la &quot;Zavorra&quot; divisionale (costi sommersi allocati sul singolo reparto), poi distribuisce il &quot;Calderone&quot; (<em>Overhead</em> generale) pesandolo sul rapporto tra le ore produttive della singola divisione e il totale aziendale.</li>\n</ol>\n<h3>Descrizione</h3>\n<p>Un sistema strategico di <em>Business Intelligence</em> progettato per il <em>Board of Directors</em>. Il software setaccia decine di migliaia di registrazioni orarie, isola le inefficienze e restituisce un sistema di reportistica automatizzato in 5 livelli. Sulla base di questi calcoli, la Direzione ha deliberato una nuova strategia di preventivazione: il software fornisce un <em>floor price</em> identificatio nella Tariffa <em>Break-Even</em> inattaccabile, trasformando i dati grezzi in un vero e proprio scudo negoziale per proteggere gli utili aziendali.</p>\n",
            "en": "<h3>The Problem</h3>\n<p>The company set prices based on theoretical hourly costs (historical remnants lacking objective analytical basis), ignoring the real impact of inefficiencies, non-billable hours (Sunk Costs), and overhead. This approach exposed the company to constant margin erosion during B2B negotiations.</p>\n<h3>The Solution</h3>\n<p>Development of a modular software architecture (Dockerized Python backend) to ingest operational logs and apply a proprietary &quot;double allocation&quot; algorithm. Interfacing with the company&#39;s Angular-based ERP via a secure Google authentication system, the logic engine operates in 5 phases:</p>\n<ol>\n<li><strong>Data Fetching:</strong> Using a client class with a session refresh token to dynamically generate secure credentials and extract server data.</li>\n<li><strong>Data Gathering:</strong> Bulk collection of personnel time-tracking records and high-cost machinery logs.</li>\n<li><strong>Data Processing:</strong> Filtering logs via operational codes and logically reclassifying them by accounting cost centers.</li>\n<li><strong>Cost Segregation:</strong> Analytical isolation of metrics (pure administrative department hours, paid absences, hours burned on lost quotes, productive ROI hours).</li>\n<li><strong>Double Allocation:</strong> The algorithmic core. It first estimates the divisional &quot;Sunk Costs&quot; (allocated to the specific department), then distributes the general &quot;Overhead&quot; based on the ratio between the division&#39;s productive hours and the company&#39;s total productive hours.</li>\n</ol>\n<h3>Description</h3>\n<p>A strategic Business Intelligence system designed for the Board of Directors. The software sifts through thousands of time records, isolates inefficiencies, and outputs an automated 5-level reporting system. Based on these calculations, Management established a new quoting strategy: the software provides an unassailable Break-Even &quot;floor price,&quot; transforming raw data into a negotiation shield to protect corporate profits.</p>\n"
        }
    },

    // OGGETTO GENERATO DALL'ORIGINE: content/miserApp.md
    {
        "id": "miserapp",
        "showInHome": true,
        "priority": 4,
        "size": "L",
        "technologies": [
            "Angular 21",
            "Firebase Auth",
            "Firestore",
            "RxJS",
            "html2pdf.js",
            "SCSS"
        ],
        "inPageDemo": false,
        "liveUrl": "",
        "githubUrl": "",
        "imageUrl": "",
        "title": {
            "it": "MiSerApp - Gestione Presenze",
            "en": "MiSerApp - Timesheet Management"
        },
        "abstract": {
            "it": "Una PWA white-label per la registrazione delle ore lavorative, con generazione automatica di fogli presenze in PDF e firma digitale.",
            "en": "A white-label PWA for tracking work hours, featuring automatic PDF timesheet generation and digital signatures."
        },
        "bodyHtml": {
            "it": "<h3>Il Problema</h3>\n<p>Fornire a un cliente privato un sistema sicuro e flessibile per la rendicontazione delle ore, gestendo casistiche complesse (orari esatti vs monte ore manuale) ed eliminando l&#39;uso di fogli cartacei o Excel.</p>\n<h3>La Soluzione</h3>\n<p>Sviluppo di una Progressive Web App in Angular 21 e Firebase. Il sistema include login tramite whitelist, applicazione batch di template mensili, blocco dei record e generazione client-side di PDF A4 firmati.</p>\n<h3>Descrizione</h3>\n<p>Versione anonimizzata di un gestionale aziendale reale. L&#39;architettura fa forte uso dei Signals di Angular per la reattività della UI, Firestore per la persistenza in tempo reale e html2pdf.js per l&#39;esportazione documentale.</p>\n",
            "en": "<h3>The Problem</h3>\n<p>Provide a private client with a secure and flexible system for reporting work hours, handling complex scenarios (exact times vs manual bulk hours), and eliminating paper or Excel timesheets.</p>\n<h3>The Solution</h3>\n<p>Development of a Progressive Web App using Angular 21 and Firebase. The system features whitelist-based login, bulk application of monthly templates, record locking, and client-side generation of signed A4 PDFs.</p>\n<h3>Description</h3>\n<p>An anonymized version of a real corporate management tool. The architecture heavily relies on Angular Signals for UI reactivity, Firestore for real-time persistence, and html2pdf.js for document export.</p>\n"
        }
    },

    // OGGETTO GENERATO DALL'ORIGINE: content/movielandApp.md
    {
        "id": "movieland-app",
        "showInHome": false,
        "priority": 4,
        "size": "L",
        "technologies": [
            "Angular 17+",
            "FastAPI",
            "Firebase",
            "Google Cloud Run",
            "SCSS",
            "Docker"
        ],
        "inPageDemo": false,
        "liveUrl": "https://movieland-6f414.web.app",
        "githubUrl": "",
        "imageUrl": "",
        "title": {
            "it": "Movieland - Tracking Film",
            "en": "Movieland - Movie Tracker"
        },
        "abstract": {
            "it": "Una web app full-stack in stile Netflix per cercare film, scoprire dove guardarli in streaming e tenere traccia dei propri preferiti.",
            "en": "A Netflix-style full-stack web app to search for movies, discover streaming availability, and track personal favorites."
        },
        "bodyHtml": {
            "it": "<h3>Il Problema</h3>\n<p>Mantenersi allenati su un progetto full-stack reale, affrontando le sfide del design mobile-first rigoroso e della gestione complessa di filtri incrociati (titolo, attore, genere, piattaforma) applicati lato server.</p>\n<h3>La Soluzione</h3>\n<p>Architettura disaccoppiata con SPA in Angular 17+ su Firebase Hosting e backend FastAPI (Python) containerizzato su Google Cloud Run, integrando TMDB API, Firebase Auth e Firestore per i dati utente.</p>\n<h3>Descrizione</h3>\n<p>Un&#39;app in stile Netflix/Prime Video per cercare film, scoprire dove guardarli in streaming e tenere traccia delle proprie visioni con note personali e un originale sistema di rating a &#39;koala&#39;.</p>\n",
            "en": "<h3>The Problem</h3>\n<p>Keep training on a real full-stack project, tackling the challenges of rigorous mobile-first design and the complex management of cross-filters (title, actor, genre, platform) applied on the server side.</p>\n<h3>The Solution</h3>\n<p>Decoupled architecture with an Angular 17+ SPA on Firebase Hosting and a containerized FastAPI (Python) backend on Google Cloud Run, integrating TMDB APIs, Firebase Auth, and Firestore for user data.</p>\n<h3>Description</h3>\n<p>A Netflix/Prime Video-style app to search for movies, discover where to stream them, and track your watch history with personal notes and an original &#39;koala&#39; rating system.</p>\n"
        }
    },

    // OGGETTO GENERATO DALL'ORIGINE: content/timeReportCustom.md
    {
        "id": "time-report-custom-app",
        "showInHome": true,
        "priority": 3,
        "size": "M",
        "technologies": [
            "Google Apps Script (GAS)",
            "JavaScript (ES6)",
            "HTML5 / CSS3",
            "Bootstrap 5",
            "Serverless Architecture"
        ],
        "inPageDemo": false,
        "liveUrl": "",
        "githubUrl": "",
        "imageUrl": "",
        "title": {
            "it": "Time Report Custom - Web App Serverless",
            "en": "Custom Time Report - Serverless Web App"
        },
        "abstract": {
            "it": "Una Web App serverless sicura e dal design premium per tracciare le ore lavorative dei collaboratori, proteggendo i dati e senza impattare la contabilità ufficiale aziendale.",
            "en": "A secure, premium-designed serverless Web App to track collaborators' working hours, protecting data without impacting the official corporate accounting."
        },
        "bodyHtml": {
            "it": "<h3>Il Problema</h3>\n<p>La gestione delle ore lavorative e delle presenze per stagisti non retribuiti (stage curricolare) necessitava di uno strumento agile, che non impattasse e non &quot;sporcasse&quot; la contabilità di commessa dell&#39;applicativo ufficiale (<em>ERP</em>) aziendale. Era inoltre fondamentale garantire che i dati inseriti non potessero essere manipolati a posteriori dagli utenti e che l&#39;accesso fosse strettamente limitato al personale autorizzato, evitando dispersioni di dati o visualizzazioni indesiderate.</p>\n<h3>La Soluzione</h3>\n<p>Sviluppo di un&#39;architettura <em>Serverless</em> modulare basata interamente sull&#39;infrastruttura aziendale di <em>Google Workspace</em> (tramite <em>Google Apps Script</em>). Il sistema utilizza un approccio orientato agli oggetti (<em>OOP</em>) con un <em>backend</em> disaccoppiato in servizi e un <em>frontend responsive</em>. L&#39;applicazione opera attraverso 5 fasi logiche:</p>\n<ol>\n<li><strong>security guard:</strong> al caricamento, il controller HTTP principale intercetta l&#39;identità dell&#39;utente e la valida contro una <em>whitelist</em> ambientale. Agli utenti non autorizzati viene bloccato l&#39;accesso direttamente lato server, esponendo solo una schermata di cortesia;</li>\n<li><strong>data fetching:</strong> il <em>client</em> interroga asincronamente le API per inizializzare dinamicamente i vincoli del calendario (es. escludendo le date già rendicontate per evitare duplicati);</li>\n<li><strong>data validation:</strong> il <em>payload</em> viene ispezionato da una classe di validazione dedicata lato <em>backend</em> per garantire l&#39;integrità formale ed evitare iniezioni di dati corrotti;</li>\n<li><strong>protected persistence:</strong> il salvataggio avviene su un &quot;database&quot; <em>cloud</em> (<em>Google Sheets</em>) mantenuto invisibile all&#39;utente. Lo script sfrutta un contesto di esecuzione amministrativo (<em>Admin Context Execution</em>), blindando l&#39;archivio da accessi diretti;</li>\n<li><strong>smart notifications:</strong> generazione automatica di una notifica email tramite template HTML, impostando dinamicamente i parametri di invio (CC all&#39;utente come ricevuta, e <em>Reply-To</em> configurato sul mittente reale) per favorire comunicazioni fluide con la Direzione.</li>\n</ol>\n<h3>Descrizione</h3>\n<p>Un&#39;applicazione web flessibile, sicura e scalabile, caratterizzata da un&#39;interfaccia utente premium (<em>Glassmorphism</em>, <em>Dark Mode</em> nativa e auto-completamento avanzato del testo). L&#39;infrastruttura a &quot;costo zero&quot;, ospitata interamente sul <em>tenant</em> aziendale, funge da ponte sicuro: raccoglie i dati, li archivia in un ambiente blindato e notifica il management, azzerando le inefficienze operative. Un prodotto <em>Enterprise-ready</em> che trasforma la rendicontazione oraria in un processo automatizzato, elegante e senza attriti.</p>\n",
            "en": "<h3>The Problem</h3>\n<p>Tracking working hours and attendance for unpaid interns (curricular internships) required an agile tool that would not interfere with or clutter the company&#39;s official project accounting software (ERP). Furthermore, it was crucial to ensure that submitted data could not be tampered with after the fact and that access was strictly restricted to authorized personnel, preventing data leaks or unauthorized views.</p>\n<h3>The Solution</h3>\n<p>Development of a modular Serverless architecture built entirely on the corporate Google Workspace infrastructure (via Google Apps Script). The system utilizes an Object-Oriented Programming (OOP) approach with a decoupled backend and a responsive frontend. The application operates through 5 logical phases:</p>\n<ol>\n<li><strong>Security Guard:</strong> Upon loading, the main HTTP controller intercepts the user&#39;s identity and validates it against an environmental whitelist. Unauthorized users are blocked directly on the server side, displaying only a localized courtesy screen.</li>\n<li><strong>Data Fetching:</strong> The client asynchronously queries the APIs to dynamically initialize calendar constraints (e.g., excluding already reported dates to prevent duplicates).</li>\n<li><strong>Data Validation:</strong> The payload is inspected by a dedicated backend validation class to ensure formal integrity and prevent corrupted data injection.</li>\n<li><strong>Protected Persistence:</strong> Data is saved to a cloud &quot;database&quot; (Google Sheets) kept completely invisible to the user. The script leverages an Admin Context Execution, shielding the archive from direct access.</li>\n<li><strong>Smart Notifications:</strong> Automatic generation of an email notification via an HTML template, dynamically setting routing parameters (CC to the user as a receipt, and Reply-To mapped to the actual sender) to foster seamless communication with Management.</li>\n</ol>\n<h3>Description</h3>\n<p>A flexible, secure, and scalable web application featuring a premium user interface (Glassmorphism, native Dark Mode, and advanced text auto-completion). The &quot;zero-cost&quot; infrastructure, hosted entirely on the corporate tenant, acts as a secure bridge: it collects data, stores it in a shielded environment, and notifies management, eliminating operational inefficiencies. An Enterprise-ready product that turns time reporting into an automated, elegant, and frictionless process.</p>\n"
        }
    }
];