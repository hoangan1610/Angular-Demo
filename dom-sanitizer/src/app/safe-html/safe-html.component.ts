import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-safe-html',
  standalone: true,
  template: `
    <div [innerHtml]="safeHtml"></div>
  `,
  styles: []
})
export class SafeHtmlComponent {
  unsafeHtml: string = `<script>alert('XSS Attack!');</script><p>This is a safe paragraph.</p>`;
  safeHtml: SafeHtml;

  constructor(private sanitizer: DomSanitizer) {
    this.safeHtml = this.sanitizer.bypassSecurityTrustHtml(this.unsafeHtml);
  }
}
