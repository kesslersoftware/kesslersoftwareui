import {Component} from '@angular/core';

@Component({
  selector: 'app-privacy',
  standalone: true,
  template: `
    <section>
      <h1>ImprovLab Privacy Policy</h1><br/>
      <h4>Privacy Policy</h4>
      <p>
        ImprovLab is operated by Kessler Software LLC.
        We respect your privacy and are committed to protecting it.
      </p>
      <h4>Information We Collect</h4>
      <p>ImprovLab may collect limited information necessary for app functionality,
        such as basic app usage data and information you voluntarily provide while
        using the app.
      </p>
      <h4>How We Use Information</h4>
      <p>Information is used solely to operate and improve the app, including managing
        sessions, timers, and related features.
      </p>
      <h4>Data Sharing</h4>
      <p>We do not sell or share personal data with third parties.</p>
      <h4>Data Retention and Deletion</h4>
      <p>Data is retained only as long as necessary for app functionality.
        Users may request deletion of their data by contacting us.
      </p>
      <h4>Children’s Privacy</h4>
      <p>ImprovLab is not designed for children under 13.</p>
      <h4>Contact Us</h4>
      <p>If you have questions about this privacy policy, contact us at:
        support&#64;kesslersoftware.com</p>
      <h4>Effective Date: 12/16/2025</h4>
    </section>
  `,
  styles: [`section { max-width: 800px; margin: auto; padding: 2rem; }`]
})
export class PrivacyComponent {}
