import { bootstrapApplication } from '@angular/platform-browser';
import { ParentComponent } from './app/parent-component/parent-component.component';

bootstrapApplication(ParentComponent)
  .catch(err => console.error(err));
