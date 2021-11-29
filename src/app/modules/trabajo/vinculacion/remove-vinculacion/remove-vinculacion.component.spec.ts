import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveVinculacionComponent } from './remove-vinculacion.component';

describe('RemoveVinculacionComponent', () => {
  let component: RemoveVinculacionComponent;
  let fixture: ComponentFixture<RemoveVinculacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveVinculacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveVinculacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
