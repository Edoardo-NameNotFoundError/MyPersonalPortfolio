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
            technologies: 'Tecnologie utilizzate'
        }
    }
};

export type Dictionary = typeof it;