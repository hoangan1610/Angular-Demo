import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from '../child-component/child-component.component';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css'],
  standalone: true,
  imports: [CommonModule, ChildComponent]
})
export class ParentComponent {
  parentMessage: string = 'Hello from Parent Component!';
  childResponse: string = '';

  receiveMessage($event: string) {
    this.childResponse = $event;
  }
}
