import { bootstrapApplication } from '@angular/platform-browser';
import { StandaloneExampleComponent } from './app/standalone-example/standalone-example.component';

bootstrapApplication(StandaloneExampleComponent)
  .catch(err => console.error(err));
