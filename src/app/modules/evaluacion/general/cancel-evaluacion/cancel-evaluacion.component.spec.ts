import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelEvaluacionComponent } from './cancel-evaluacion.component';

describe('CancelEvaluacionComponent', () => {
  let component: CancelEvaluacionComponent;
  let fixture: ComponentFixture<CancelEvaluacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelEvaluacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelEvaluacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
