import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveAreaComponent } from './remove-area.component';

describe('RemoveAreaComponent', () => {
  let component: RemoveAreaComponent;
  let fixture: ComponentFixture<RemoveAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
