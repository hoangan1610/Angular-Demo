import { bootstrapApplication } from '@angular/platform-browser';
import { DirectiveControlFlowExampleComponent } from './app/directive-control-flow-example/directive-control-flow-example.component';

bootstrapApplication(DirectiveControlFlowExampleComponent)
  .catch(err => console.error(err));
