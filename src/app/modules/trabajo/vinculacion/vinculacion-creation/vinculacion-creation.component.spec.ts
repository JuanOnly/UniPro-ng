import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinculacionCreationComponent } from './vinculacion-creation.component';

describe('VinculacionCreationComponent', () => {
  let component: VinculacionCreationComponent;
  let fixture: ComponentFixture<VinculacionCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VinculacionCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VinculacionCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
