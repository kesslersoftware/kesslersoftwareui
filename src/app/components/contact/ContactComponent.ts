import {Component} from '@angular/core';
import {ReactiveFormsModule, FormBuilder, Validators, FormGroup} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section>
      <h2 class="heading">Contact Us</h2>
      <p>Have a project in mind or want to get in touch? Fill out the form below:</p>
      <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
        <label>
          Reason for Contact:
          <select formControlName="reason">
            <option value="freelance">Freelance Inquiry</option>
            <option value="product">Product Feedback</option>
            <option value="general">General Question</option>
          </select>
        </label>

        <label>
          Your Email or Phone:
          <input formControlName="replyTo" placeholder="you@example.com or 555-555-5555" required />
        </label>

        <label>
          Message (max 300 chars):
          <textarea formControlName="message" rows="4" maxlength="300"></textarea>
        </label>

        <button type="submit" [disabled]="contactForm.invalid">Send Message</button>
      </form>
    </section>
  `,
  styles: [`
    .heading { display: block; text-align: center; }
    section { max-width: 800px; margin: auto; padding: 2rem; } a { color: #007bff; }
    form { display: flex; flex-direction: column; gap: 1rem; }
    input, select, textarea { width: 100%; padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px; }
    button { width: fit-content; padding: 0.5rem 1rem; background: #007bff; color: white;
      border: none; border-radius: 5px; }`]
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      reason: ['freelance', Validators.required],
      replyTo: ['', [Validators.required, Validators.minLength(4)]],
      message: ['', [Validators.required, Validators.maxLength(300)]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      console.log('Submitted message:', formData);
      alert('Your message has been sent. Thank you!');
      this.contactForm.reset({reason: 'freelance'});
    }
  }
}
