import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ChildComponent {
  message: string = 'Hello from Child Component!';
}
