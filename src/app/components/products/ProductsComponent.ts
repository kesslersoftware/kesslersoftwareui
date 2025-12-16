import {Component} from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  template: `
    <section>
      <div>
        <h2 class="heading">Kessler Products</h2>
        <div class="product-grid">
          <div class="product-card">
            <h3>improvlab</h3>
            <p>A tool to help improvisors host shows, Jam, and practice sessions</p>
            <span class="coming-soon">Coming Soon</span>
          </div>
          <div class="product-card">
            <h3>BoycottPro</h3>
            <p>A comprehensive boycott app that helps users keep track of what products and
            services they are currently boycotting and why. Helps the community make their voice heard!</p>
            <span class="coming-soon">Coming Soon</span>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .heading { display: block; text-align: center; }
    .product-grid { display: flex; gap: 2rem; flex-wrap: wrap; }
    .product-card { flex: 1; min-width: 250px; border: 1px solid #ddd;
      border-radius: 8px; padding: 1rem; text-align: center; }
    .coming-soon { display: block; margin-top: 1rem; font-style: italic; color: #888; }
    section { max-width: 900px; margin: auto; padding: 2rem; }
  `]
})
export class ProductsComponent {}
