import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageDetectionComponent } from './language-detection.component';

describe('LanguageDetectionComponent', () => {
  let component: LanguageDetectionComponent;
  let fixture: ComponentFixture<LanguageDetectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageDetectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
