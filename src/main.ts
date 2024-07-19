import { bootstrapApplication } from '@angular/platform-browser';
import { FormValidatorDemoComponent } from './app/form-validator-demo/form-validator-demo.component';

bootstrapApplication(FormValidatorDemoComponent)
  .catch(err => console.error(err));
