import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveControlFlowExampleComponent } from './directive-control-flow-example.component';

describe('DirectiveControlFlowExampleComponent', () => {
  let component: DirectiveControlFlowExampleComponent;
  let fixture: ComponentFixture<DirectiveControlFlowExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectiveControlFlowExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectiveControlFlowExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
