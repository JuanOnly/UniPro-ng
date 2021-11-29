import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleEditionComponent } from './role-edition.component';

describe('RoleEditionComponent', () => {
  let component: RoleEditionComponent;
  let fixture: ComponentFixture<RoleEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoleEditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
