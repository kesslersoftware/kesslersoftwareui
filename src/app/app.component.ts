import { Component } from '@angular/core';
import { RouterOutlet,RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule],
  template: `
    <header class="logo-bar">
      <img src="assets/logo3.jpg" alt="Kessler Software Logo" class="logo-image"/>
    </header>
    <header class="border-bottom">
      <div class="container-fluid">
        <nav class="navbar navbar-expand-md navbar-light bg-light">
          <div class="container">
            <a class="navbar-brand" routerLink="/">Kessler Software, LLC</a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item"><a class="nav-link" routerLink="/">Home</a></li>
                <li class="nav-item"><a class="nav-link" routerLink="/about">About</a></li>
                <li class="nav-item"><a class="nav-link" routerLink="/services">Services</a></li>
                <li class="nav-item"><a class="nav-link" routerLink="/products">Products</a></li>
                <li class="nav-item"><a class="nav-link" routerLink="/contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>

    <main class="main body">
      <router-outlet></router-outlet>
    </main>
    <footer class="footer">
      © 2025 Kessler Software, LLC. All rights reserved.
    </footer>
  `,
  styles: [`
    .logo-bar {
      background: #ffffff;
      text-align: center;
      padding: 1rem 0;
      border-bottom: 1px solid #ddd;
    }
    .logo-image {
      max-width: 100%;
      max-height: 300px;
      object-fit: contain;
    }
    .body { background-color: lightskyblue; border: 10rem; border-color: black }
    .header, .footer { padding: 1rem; background: #f8f9fa; text-align: center; }
    .nav {
      display: flex;
      justify-content: center;
      gap: 1rem;
    }

    .nav a {
      text-decoration: none;
      color: #007bff;
    }
    .main { padding: 5rem; border-radius: 10px;}
  `]
})
export class AppComponent {
  title = 'Kessler Software';
}
