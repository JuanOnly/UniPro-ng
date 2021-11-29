import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluacionEditionComponent } from './evaluacion-edition.component';

describe('EvaluacionEditionComponent', () => {
  let component: EvaluacionEditionComponent;
  let fixture: ComponentFixture<EvaluacionEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluacionEditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluacionEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
