import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PoliciesChart01Component } from './policies-chart01.component';

describe('PoliciesChart01Component', () => {
  let component: PoliciesChart01Component;
  let fixture: ComponentFixture<PoliciesChart01Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliciesChart01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliciesChart01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
