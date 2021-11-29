import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordatoriosCreationComponent } from './recordatorios-creation.component';

describe('RecordatoriosCreationComponent', () => {
  let component: RecordatoriosCreationComponent;
  let fixture: ComponentFixture<RecordatoriosCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordatoriosCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordatoriosCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
