// ==========================================
// CONFIG.js - Google Apps Script Configuration
// ==========================================
// Questo file gestisce le variabili d'ambiente per il backend GAS.

const IS_PRODUCTION = false;

const DATA = {
  test: {
    // Dati fittizi per test locali o sviluppo. Nessun dato reale qui!
    cvIdFileOnDrive: 'ID-DI-PROVA-DRIVE',
    email: {
      adminEmail: Session.getEffectiveUser().getEmail(),
      toRecruiter: {
        subject: '[TEST] Il mio Curriculum Vitae - {{requesterName}}',
        htmlBody: HtmlService.createHtmlOutputFromFile('RecruiterMail_Test').getContent()
      },
      toMe: {
        subject: '[TEST] Nuova richiesta CV da parte di {{requesterName}}',
        htmlBody: '<p>Test da {{requesterEmail}}</p>'
      }
    }
  },

  production: {
    cvIdFileOnDrive: PropertiesService.getScriptProperties().getProperty('CV_FILE_ID'),
    
    email: {
      adminEmail: Session.getEffectiveUser().getEmail(),
      
      toRecruiter: {
        subject: 'Il mio Curriculum Vitae - XXX-YYY',
        htmlBody: HtmlService.createHtmlOutputFromFile('RecruiterMail').getContent()
      },
      
      toMe: {
        subject: HtmlService.createHtmlOutputFromFile('AlertSubject').getContent(),
        htmlBody: HtmlService.createHtmlOutputFromFile('AlertMail').getContent()
      }
    }
  }
};

// Esportazione della configurazione attiva in base all'ambiente
const CONFIG = IS_PRODUCTION ? DATA.production : DATA.test;