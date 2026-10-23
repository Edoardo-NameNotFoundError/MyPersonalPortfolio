import { Dictionary } from "./it";

export const en: Dictionary = {
    title: { 
        home: 'Home', 
        chiSono: 'About me', 
        progetti: 'Projects', 
        contatti: 'Contact', 
        dettaglio: 'Project detail', 
        notFound: 'Error 404' 
    },
    
    nav:   { 
        home: 'Home', 
        chiSono: 'About me', 
        progetti: 'My projects', 
        contatti: 'Contact me',
        indietro: 'Back' 
    },

    home:  { 
        titolo: "This will be my landing page", 
    },

    chiSono : {
        titolo: 'About me',
        sottotitolo: 'Mario Rossi',
        descrizione: 'After a degree in Pincopallinolandia, I have experienced...'
    },

    footer: {
        tagline: 'Frontend developer · Angular and TypeScript',
        codice: 'Source code of this site',
        stack: 'Built with Angular 21+',
        diritti: 'All rights reserved',
        suInCima: 'Back to top'
    },

    projects: {
        labels: {
        size: 'Size',
        problem: 'The Problem',
        solution: 'The Solution',
        description: 'Description',
        technologies: 'Tech Stack',
        showDetails: 'Show Details',
        back: 'Back to projects'
        }
    },

    notFoundPage: {
        title: 'Error',
        description: 'Command not found. The requested page might have been deleted, moved, or simply doesn\'t exist in this timeline.',
        prompt: 'Please try to ',
        goBack: 'go back',
        or: ' or ',
        goHome: 'return to the root (homepage)',
        goodLuck: 'End of line. Good luck.'
    }
};