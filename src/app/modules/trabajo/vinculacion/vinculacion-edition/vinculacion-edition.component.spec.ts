import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinculacionEditionComponent } from './vinculacion-edition.component';

describe('VinculacionEditionComponent', () => {
  let component: VinculacionEditionComponent;
  let fixture: ComponentFixture<VinculacionEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VinculacionEditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VinculacionEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
