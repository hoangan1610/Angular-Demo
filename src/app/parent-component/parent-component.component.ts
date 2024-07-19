import { Component, ViewChild, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from '../child-component/child-component.component';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css'],
  standalone: true,
  imports: [CommonModule, ChildComponent]
})
export class ParentComponent implements AfterViewInit {
  @ViewChild(ChildComponent) singleChild!: ChildComponent;
  @ViewChildren(ChildComponent) multipleChildren!: QueryList<ChildComponent>;

  ngAfterViewInit() {
    console.log(this.singleChild.message); // Truy cập thuộc tính của component con
    this.multipleChildren.forEach(child => console.log(child.message)); // Truy cập thuộc tính của tất cả các component con
  }
}
