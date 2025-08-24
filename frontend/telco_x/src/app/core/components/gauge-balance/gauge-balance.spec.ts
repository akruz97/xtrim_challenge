import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaugeBalance } from './gauge-balance';

describe('GaugeBalance', () => {
  let component: GaugeBalance;
  let fixture: ComponentFixture<GaugeBalance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GaugeBalance]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaugeBalance);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
