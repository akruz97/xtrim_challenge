import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPlan } from './my-plan';

describe('MyPlan', () => {
  let component: MyPlan;
  let fixture: ComponentFixture<MyPlan>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyPlan]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyPlan);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
