import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluacionCreationComponent } from './evaluacion-creation.component';

describe('EvaluacionCreationComponent', () => {
  let component: EvaluacionCreationComponent;
  let fixture: ComponentFixture<EvaluacionCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluacionCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluacionCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
