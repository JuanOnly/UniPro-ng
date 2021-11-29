import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelSolicitudComponent } from './cancel-solicitud.component';

describe('CancelSolicitudComponent', () => {
  let component: CancelSolicitudComponent;
  let fixture: ComponentFixture<CancelSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelSolicitudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
