import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordatoriosListComponent } from './recordatorios-list.component';

describe('RecordatoriosListComponent', () => {
  let component: RecordatoriosListComponent;
  let fixture: ComponentFixture<RecordatoriosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordatoriosListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordatoriosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
