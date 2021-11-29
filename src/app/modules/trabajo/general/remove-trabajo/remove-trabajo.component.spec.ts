import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveTrabajoComponent } from './remove-trabajo.component';

describe('RemoveTrabajoComponent', () => {
  let component: RemoveTrabajoComponent;
  let fixture: ComponentFixture<RemoveTrabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveTrabajoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
