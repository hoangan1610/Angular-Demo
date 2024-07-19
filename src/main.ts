import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { RxjsDemoComponent } from './app/rxjs-demo/rxjs-demo.component';

const routes = [
  { path: '', component: RxjsDemoComponent },
  { path: '**', redirectTo: '' } // Catch-all route
];

bootstrapApplication(RxjsDemoComponent, {
  providers: [
    provideRouter(routes)
  ]
}).catch(err => console.error(err));
