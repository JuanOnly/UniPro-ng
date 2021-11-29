import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoEditionComponent } from './resultado-edition.component';

describe('ResultadoEditionComponent', () => {
  let component: ResultadoEditionComponent;
  let fixture: ComponentFixture<ResultadoEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadoEditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
