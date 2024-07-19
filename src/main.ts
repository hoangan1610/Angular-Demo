import { bootstrapApplication } from '@angular/platform-browser';
import { BindingExampleComponent } from './app/binding-example/binding-example.component';

bootstrapApplication(BindingExampleComponent)
  .catch(err => console.error(err));
