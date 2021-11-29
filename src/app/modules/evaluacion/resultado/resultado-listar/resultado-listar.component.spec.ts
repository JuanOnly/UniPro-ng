import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoListarComponent } from './resultado-listar.component';

describe('ResultadoListarComponent', () => {
  let component: ResultadoListarComponent;
  let fixture: ComponentFixture<ResultadoListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadoListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
