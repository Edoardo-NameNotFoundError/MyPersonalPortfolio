// ==========================================
// EmailSenderBackend.gs - Google Apps Script
// ==========================================
// Motore di notifica e invio mail
// 1. Invia una mail per informare della richiesta di ottenimento CV
// 2. Prepara già un template di bozza da inviare direttamente al recruiter
// L'operazione di invio è gestita manualmente per un check personale e per controllo umano

// ==========================================
// EmailSenderBackend.gs - Google Apps Script
// ==========================================

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    
    const rawEmail = data.requesterEmail || "";
    const rawName = data.requesterName || "";

    const requesterEmail = rawEmail.toString().trim();
    const requesterName = rawName.toString().trim();

    if(!requesterEmail || !requesterEmail.includes('@')) {
      return ContentService.createTextOutput(JSON.stringify({
        status: 'error',
        message: 'La mail inserita non è valida!'
      })).setMimeType(ContentService.MimeType.JSON);
    }

    if(!requesterName || requesterName === '') {
      return ContentService.createTextOutput(JSON.stringify({
        status: 'error',
        message: 'Manca il nome!'
      })).setMimeType(ContentService.MimeType.JSON);
    }

    const additionalText = data.additionalContent.toString().trim();

    const myEmail = CONFIG.email.adminEmail;
    const cvFileId = CONFIG.cvIdFileOnDrive;

    createDraft(requesterEmail, requesterName, cvFileId);

    const alertSubject = CONFIG.email.toMe.subject.replace('{{requesterName}}', requesterName);
    let alertHtmlBody = CONFIG.email.toMe.htmlBody
                            .replace('{{requesterEmail}}', requesterEmail)
                            .replace('{{requesterName}}', requesterName);

    if (additionalText !== '') {
      alertHtmlBody += "<br><br><strong>Note aggiuntive:</strong><br>" + additionalText;
    }

    GmailApp.sendEmail(myEmail, alertSubject, "", {
      htmlBody: alertHtmlBody
    });
    
    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "Richiesta ricevuta, bozza creata!"
    })).setMimeType(ContentService.MimeType.JSON);

  } catch(err) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: err.message
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function createDraft(recruiterEmail, recruiterName, cvFileId) {
  try {
    const cv = DriveApp.getFileById(cvFileId);
    
    const toRecruiterSubject = CONFIG.email.toRecruiter.subject.replace('{{requesterName}}', recruiterName);
    const toRecruiterHtmlBody = CONFIG.email.toRecruiter.htmlBody.replace('{{requesterName}}', recruiterName);

    GmailApp.createDraft(recruiterEmail, toRecruiterSubject, "", {
      htmlBody: toRecruiterHtmlBody,
      attachments: [cv.getAs(MimeType.PDF)]
    });

  } catch(err) {
    throw new Error("Errore nella creazione della bozza: " + err.message);
  }
}