// ==========================================
// EmailSenderBackend.gs - Google Apps Script
// ==========================================
// Motore di notifica e invio mail
// 1. Invia una mail per informare della richiesta di ottenimento CV
// 2. Prepara già un template di bozza da inviare direttamente al recruiter
// L'operazione di invio è gestita manualmente per un check personale e per controllo umano

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const requesterEmail = data.requesterEmail;
    const requesterName = data.requesterName || "Recruiter";

    const myEmail = CONFIG.toMe.email.adminEmail;
    const cvFileId = CONFIG.cvIdFileOnDrive;

    createDraft(requesterEmail, requesterName, cvFileId);

    const alertSubject = CONFIG.email.toMe.subject;
    const alertHtmlBody = CONFIG.email.toME.htmlBody
                                            .replace('{{requesterEmail}}', requesterEmail)
                                            .replace('{{requesterName}}', requesterName);

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
    
    const toRecruiterSubject = CONFIG.email.toRecruiter.subject;
    const toRecruiterHtmlBody = CONFIG.email.toRecruiter.htmlBody.replace('{{requesterName}}', recruiterName);

    GmailApp.createDraft(recruiterEmail, toRecruiterSubject, "", {
      htmlBody: toRecruiterHtmlBody,
      attachments: [cv.getAs(MimeType.PDF)]
    });

  } catch(err) {
    throw new Error("Errore nella creazione della bozza: " + err.message);
  }
}