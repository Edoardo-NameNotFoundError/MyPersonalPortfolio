import { Project } from "../../models/project.interface";

export const PROJECTS: Project[] = [
  {
    id: 'banca-italia-converter',
    showInHome: true,
    priority: 4,
    title: {
      it: "Convertitore Valute Banca d'Italia",
      en: "Bank of Italy Exchange Rate Converter"
    },
    size: 'S',
    problem: {
      it: "Ottenere rapidamente il tasso di cambio ufficiale per la fatturazione in una data specifica, aggirando il problema dei giorni festivi o weekend in cui la Banca non pubblica i dati.",
      en: "Quickly obtain the official exchange rate for invoicing on a specific date, bypassing the issue of holidays or weekends when the Bank does not publish data."
    },
    solution: {
      it: "Script Python che interroga le API REST pubbliche della Banca d'Italia, implementando una logica ricorsiva per trovare l'ultimo giorno lavorativo utile e formattare il risultato per le fatture.",
      en: "Python script that queries the Bank of Italy's public REST APIs, implementing a fallback logic to find the latest valid business day and format the result for invoices."
    },
    description: {
      it: "Una piccola ma utilissima utility da terminale (con prototipo GUI in CustomTkinter) per automatizzare e velocizzare un noioso processo amministrativo manuale.",
      en: "A small but very useful CLI utility (with a GUI prototype in CustomTkinter) to automate and speed up a tedious manual administrative process."
    },
    technologies: [
      'Python', 
      'Requests', 
      'REST API', 
      'CustomTkinter'
    ],
    imageUrl: '',
    githubUrl: '',
    liveUrl: ''
  }
]