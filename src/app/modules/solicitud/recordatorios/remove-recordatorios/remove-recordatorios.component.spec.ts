import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveRecordatoriosComponent } from './remove-recordatorios.component';

describe('RemoveRecordatoriosComponent', () => {
  let component: RemoveRecordatoriosComponent;
  let fixture: ComponentFixture<RemoveRecordatoriosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveRecordatoriosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveRecordatoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
