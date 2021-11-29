import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoUploadComponent } from './resultado-upload.component';

describe('ResultadoUploadComponent', () => {
  let component: ResultadoUploadComponent;
  let fixture: ComponentFixture<ResultadoUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadoUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
