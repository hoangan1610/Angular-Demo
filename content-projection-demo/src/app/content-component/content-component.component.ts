import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from '../container-component/container-component.component';


@Component({
  selector: 'app-content-component',
  templateUrl: './content-component.component.html',
  styleUrls: ['./content-component.component.css'],
  standalone: true,
  imports: [CommonModule
    ,ContainerComponent,
  ]
})
export class ContentComponent {
}
