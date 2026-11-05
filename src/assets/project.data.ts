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
        "showInHome": true,
        "priority": 5,
        "size": "L",
        "technologies": [
            "Angular 17+",
            "FastAPI",
            "Firebase",
            "Google Cloud Run",
            "SCSS",
            "Docker"
        ],
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
    }
];