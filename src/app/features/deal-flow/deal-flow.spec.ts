import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealFlow } from './deal-flow';

describe('DealFlow', () => {
  let component: DealFlow;
  let fixture: ComponentFixture<DealFlow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DealFlow],
    }).compileComponents();

    fixture = TestBed.createComponent(DealFlow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
