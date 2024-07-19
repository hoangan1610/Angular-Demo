import { bootstrapApplication } from '@angular/platform-browser';
import { FormDemoComponent } from './app/form-demo/form-demo.component';

bootstrapApplication(FormDemoComponent)
  .catch(err => console.error(err));
