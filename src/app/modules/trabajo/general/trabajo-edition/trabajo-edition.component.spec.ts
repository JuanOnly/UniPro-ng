import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajoEditionComponent } from './trabajo-edition.component';

describe('TrabajoEditionComponent', () => {
  let component: TrabajoEditionComponent;
  let fixture: ComponentFixture<TrabajoEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrabajoEditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabajoEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
