import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateRefVariableExampleComponent } from './template-ref-variable-example.component';

describe('TemplateRefVariableExampleComponent', () => {
  let component: TemplateRefVariableExampleComponent;
  let fixture: ComponentFixture<TemplateRefVariableExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateRefVariableExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateRefVariableExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
