import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcularMediaComponent } from './calcular-media.component';

describe('CalcularMediaComponent', () => {
  let component: CalcularMediaComponent;
  let fixture: ComponentFixture<CalcularMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcularMediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcularMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
