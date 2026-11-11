import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-contatti-component',
  imports: [ReactiveFormsModule], 
  templateUrl: './contatti-component.html',
  styleUrl: './contatti-component.scss',
})
export class ContattiComponent {
  private http = inject(HttpClient);
  private fb = inject(FormBuilder);

  private readonly gasUrl = 'https://script.google.com/macros/s/AKfycbyYv3cBKxGRaOg0bRcAfU2hOhHk6pDYwR5ZJGraxdR-zP9xhh7K6ERGVpFqJmAHyWluQw/exec';

  contactForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.email]],
    additionalNotes: ['']
  });

  get f() { return this.contactForm.controls; }

  
  isLoading = signal<boolean>(false);
  errorMessage = signal<string>('');
  successMessage = signal<string>('');

  async sendRequest(): Promise<void> {
    if(this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isLoading.set(true);
    const formValues = this.contactForm.value;
    const payload = {
      requesterName: formValues.name,
      requesterEmail: formValues.email,
      additionalContent: formValues.additionalNotes
    };

    try {
      const response = await firstValueFrom(
        this.http.post<{status: string, message: string}> (
          this.gasUrl,
          JSON.stringify(payload),
          { headers: { 'Content-Type': 'text/plain;charset=utf-8' } }
        )
      );

      if(response.status === 'success') {
        this.successMessage.set(`Richiesta inviata con successo!\nA breve riceverai il mio CV all'indirizzo: ${formValues.email}`);
        this.contactForm.reset();
      } else {
        this.errorMessage.set(`Si è verificato un problema con l'invio: ${response.message}`);
      }

    } catch(err) {
      console.error(`Errore durante la chiamata HTTP: ${err}`);
      this.errorMessage.set('Errore di comunicazione con il server; riprova più tardi...');
    } finally {
      this.isLoading.set(false);
    }
  }
}