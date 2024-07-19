import { bootstrapApplication } from '@angular/platform-browser';
import { ContentComponent } from './app/content-component/content-component.component';

bootstrapApplication(ContentComponent)
  .catch(err => console.error(err));
