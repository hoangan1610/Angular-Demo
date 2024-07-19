import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentComponent } from './content-component.component'; // Đảm bảo đúng tên import

describe('ContentComponent', () => {
  let component: ContentComponent;
  let fixture: ComponentFixture<ContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentComponent ] // Thêm component vào declarations
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
