import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParentComponent } from './parent-component.component';
import { ChildComponent } from '../child-component/child-component.component'; // Import ChildComponent

describe('ParentComponent', () => {
  let component: ParentComponent;
  let fixture: ComponentFixture<ParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ParentComponent, // Import ParentComponent
        ChildComponent // Import ChildComponent để sử dụng trong ParentComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
