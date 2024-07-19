import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-example',
  templateUrl: './binding-example.component.html',
  styleUrls: ['./binding-example.component.css'],
  standalone: true
})
export class BindingExampleComponent {
  message: string = 'Hello, World!';
  isDisabled: boolean = true;
  isSpecial: boolean = true;
  clickMessage: string = '';

  onClick() {
    this.clickMessage = 'Button clicked!';
  }
}
