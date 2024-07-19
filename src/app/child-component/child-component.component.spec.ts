import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChildComponent } from './child-component.component';
import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';

describe('ChildComponent', () => {
  let component: ChildComponent;
  let fixture: ComponentFixture<ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, ChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should receive input message', () => {
    component.childMessage = 'Test Message';
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')?.textContent).toContain('Test Message');
  });

  it('should emit event when button is clicked', () => {
    spyOn(component.messageEvent, 'emit');
    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    button.click();
    expect(component.messageEvent.emit).toHaveBeenCalledWith('Hello from Child Component!');
  });
});
