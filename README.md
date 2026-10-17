# Portfolio

Il mio portfolio di sviluppatore: una web app Angular statica in cui ogni progetto ha una **demo live**, eseguita in una finestra isolata dentro il sito, oltre al codice e al racconto delle scelte tecniche.

**Sito:** [link al sito, da aggiungere dopo il primo deploy]

> Stato: in sviluppo. Le milestone e le issue sono pubbliche in questo repository.

## Il contenuto

- **Progetti grandi**: applicazioni complete, ognuna con problema di partenza, scelte tecniche, risultato e demo live.
- **Snippet**: piccoli strumenti agili che mostrano un'idea o una tecnica, con anteprima eseguibile.
- **Filtri**: i progetti si filtrano per categoria (per esempio web app, automazione, integrazione API) e per tecnologia.

## Come funzionano le demo

Ogni demo gira in un `<iframe>` con l'attributo `sandbox="allow-scripts"` e senza `allow-same-origin`, all'interno di una modale. Il codice della demo è quindi isolato dal sito e dal visitatore.

## Stack

- Angular e TypeScript
- SCSS, con approccio mobile-first
- GitHub Actions e GitHub Pages per build e deploy

## Roadmap

| Milestone | Obiettivo |
| --- | --- |
| v.0.0.0 | Fondamenta: repository, licenza, board con milestone e issue, elenco dei progetti con le categorie |
| v.0.1.0 | Scheletro: app Angular con routing, palette, layout mobile-first e deploy automatico |
| v.0.2.0 | Catalogo: dati dei progetti in JSON, griglia con filtri e pagine di dettaglio |
| v.0.3.0 | Demo: modale con iframe sandbox, demo dei progetti grandi e snippet con anteprima |
| v.0.4.0 | Presentazione personale, CV scaricabile, link e contatto via mail |
| v.1.0.0 | Rifinitura: prestazioni, accessibilità, anteprime social, prove su telefono e lancio |

## Avvio in locale

Servono Node.js e npm.

```bash
git clone [url del repository]
cd [nome della cartella]
npm install
npm start
```

L'app si apre su `http://localhost:4200`. Per la build di produzione:

```bash
npm run build
```

## Privacy e anonimizzazione

Tutti i progetti sono scritti da zero per questo portfolio, con dati e domini inventati. Non contengono codice, dati, grafica o nomi di aziende o clienti. Il metodo di controllo è descritto in [.github/anonimizzazione.md](.github/anonimizzazione.md).

## Licenza

Vedi il file [LICENSE](LICENSE).

## Contatti

[LinkedIn] · [mail dedicata]
