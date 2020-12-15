import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PoliciesChart03Component } from './policies-chart03.component';

describe('PoliciesChart03Component', () => {
  let component: PoliciesChart03Component;
  let fixture: ComponentFixture<PoliciesChart03Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliciesChart03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliciesChart03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
