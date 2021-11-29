import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajoCreationComponent } from './trabajo-creation.component';

describe('TrabajoCreationComponent', () => {
  let component: TrabajoCreationComponent;
  let fixture: ComponentFixture<TrabajoCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrabajoCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabajoCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
