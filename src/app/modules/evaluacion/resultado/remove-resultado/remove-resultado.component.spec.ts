import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveResultadoComponent } from './remove-resultado.component';

describe('RemoveResultadoComponent', () => {
  let component: RemoveResultadoComponent;
  let fixture: ComponentFixture<RemoveResultadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveResultadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveResultadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
