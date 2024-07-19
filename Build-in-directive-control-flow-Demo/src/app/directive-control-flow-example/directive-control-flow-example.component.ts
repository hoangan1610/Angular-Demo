import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel

@Component({
  selector: 'app-directive-control-flow-example',
  templateUrl: './directive-control-flow-example.component.html',
  styleUrls: ['./directive-control-flow-example.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule] // Add CommonModule and FormsModule to imports
})
export class DirectiveControlFlowExampleComponent {
  isLoggedIn: boolean = true;
  numbers: number[] = [1, 2, 3, 4, 5];
  selectedColor: string = 'green';
  showMessage: boolean = true;

  toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  toggleMessage() {
    this.showMessage = !this.showMessage;
  }

  getColorClass(color: string): any {
    return {
      'bg-primary': color === 'blue',
      'bg-success': color === 'green',
      'bg-danger': color === 'red'
    };
  }
}
