import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IMCcalculadoraComponent } from './imccalculadora.component';

describe('IMCcalculadoraComponent', () => {
  let component: IMCcalculadoraComponent;
  let fixture: ComponentFixture<IMCcalculadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IMCcalculadoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IMCcalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
