import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-ref-variable-example',
  templateUrl: './template-ref-variable-example.component.html',
  styleUrls: ['./template-ref-variable-example.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class TemplateRefVariableExampleComponent {
  message: string = ''; 

  logMessage(message: string) {
    this.message = message; 
  }
}
