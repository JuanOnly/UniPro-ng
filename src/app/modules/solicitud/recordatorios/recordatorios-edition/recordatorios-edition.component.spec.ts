import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordatoriosEditionComponent } from './recordatorios-edition.component';

describe('RecordatoriosEditionComponent', () => {
  let component: RecordatoriosEditionComponent;
  let fixture: ComponentFixture<RecordatoriosEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordatoriosEditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordatoriosEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
