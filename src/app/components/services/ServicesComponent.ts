import {Component} from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  template: `
    <section>
      <h2>Kessler Services</h2>
      <ul>
        <li>Full-Stack Development (Java, Spring Boot, Angular/React)</li>
        <li>Cloud Infrastructure & Deployments (AWS, Kubernetes)</li>
        <li>REST APIs & Microservice Architecture</li>
        <li>DevOps & CI/CD Pipelines</li>
        <li>Codebase Modernization & Technical Debt Reduction</li>
      </ul>
    </section>
  `,
  styles: [`section { max-width: 800px; margin: auto; padding: 2rem; } ul { list-style-type: disc; padding-left: 2rem; }`]
})
export class ServicesComponent {}
