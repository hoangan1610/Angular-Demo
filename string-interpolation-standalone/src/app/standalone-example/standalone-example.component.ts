import { Component } from '@angular/core';

@Component({
  selector: 'app-standalone-example',
  templateUrl: './standalone-example.component.html',
  styleUrls: ['./standalone-example.component.css'],
  standalone: true
})
export class StandaloneExampleComponent {
  title = 'Demo Angular';
  description = 'This is a simple example of string interpolation in a standalone Angular component.';
  currentYear = new Date().getFullYear();
  user = {
    firstName: 'Ngo',
    lastName: 'Hoang An',
    age: 21
  };

  greetUser(): string {
    return `Hello, ${this.user.firstName} ${this.user.lastName}!`;
  }
}
