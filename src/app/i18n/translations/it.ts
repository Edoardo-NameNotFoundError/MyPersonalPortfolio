export const it = {
    title: { 
        home: 'Home', 
        chiSono: 'Chi sono', 
        progetti: 'Progetti', 
        contatti: 'Contatti', 
        dettaglio: 'Dettaglio progetto', 
        notFound: 'Errore 404' 
    },
    
    nav:   { 
        home: 'Home', 
        chiSono: 'Chi sono', 
        progetti: 'I miei progetti', 
        contatti: 'Contatti',
        indietro: 'Indietro'
    },

    home:  { 
        titolo: 'Questa sarà la mia landing page', 
    },

    chiSono : {
        titolo: 'Chi sono',
        sottotitolo: 'Mario Rossi',
        descrizione: 'Dopo un percorso di laurea a PincoPallinolandia, ho fatto esperienza...'
    },

    footer: {
        tagline: 'Sviluppatore frontend · Angular e TypeScript',
        codice: 'Codice sorgente del sito',
        stack: 'Realizzato con Angular 21+',
        diritti: 'Tutti i diritti riservati',
        suInCima: 'Torna su'
    },

    projects: {
        labels: {
            size: 'Dimensione',
            problem: 'Il Problema',
            solution: 'La Soluzione',
            description: 'Descrizione',
            technologies: 'Tecnologie utilizzate',
            showDetails: 'Vedi i dettagli',
            back: 'Torna ai progetti'
        }
    },

    notFoundPage: {
        title: 'Errore',
        description: 'Comando non trovato. La pagina richiesta è stata rimossa, rinominata o non è mai esistita in questa linea temporale.',
        prompt: 'Esegui il comando per ',
        goBack: 'tornare indietro',
        or: ' oppure ',
        goHome: 'tornare alla root (homepage)',
        goodLuck: 'Fine delle trasmissioni. Buona fortuna.'
    }
};

export type Dictionary = typeof it;