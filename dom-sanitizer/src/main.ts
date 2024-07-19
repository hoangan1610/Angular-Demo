import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Route } from '@angular/router';
import { SafeHtmlComponent } from './app/safe-html/safe-html.component';

const routes: Route[] = [
  { path: '', redirectTo: '/safe-html', pathMatch: 'full' },
  { path: 'safe-html', component: SafeHtmlComponent },
  { path: '**', redirectTo: '/safe-html' } // Catch-all route
];

bootstrapApplication(SafeHtmlComponent, {
  providers: [
    provideRouter(routes)
  ]
}).catch(err => console.error(err));
