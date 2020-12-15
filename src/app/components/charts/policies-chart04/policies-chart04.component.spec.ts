import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PoliciesChart04Component } from './policies-chart04.component';

describe('PoliciesChart04Component', () => {
  let component: PoliciesChart04Component;
  let fixture: ComponentFixture<PoliciesChart04Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliciesChart04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliciesChart04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
