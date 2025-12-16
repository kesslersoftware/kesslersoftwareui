import {Component} from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <section class="hero">
      <h1>Offering software products and services that make people's lives better</h1>
      <p>We’re a New York-based software company delivering custom-built applications and full-stack engineering services.</p>
      <a routerLink="/services" class="cta-button">View Services</a>
    </section>
  `,
  styles: [`
    .hero { text-align: center; padding: 4rem 2rem; }
    .cta-button { padding: 0.5rem 1rem; background-color: #007bff; color: white; border-radius: 5px; }
  `]
})
export class HomeComponent {}
