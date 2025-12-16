import {Component} from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section>
      <h2>About Us</h2>
      <p>We are a Brooklyn-based software company founded with a mission to create technology that improves people’s lives. With over a decade of experience in backend, cloud, and full-stack development, we specialize in delivering tailored software solutions that scale.</p>
    </section>
  `,
  styles: [`section { max-width: 800px; margin: auto; padding: 2rem; }`]
})
export class AboutComponent {}

