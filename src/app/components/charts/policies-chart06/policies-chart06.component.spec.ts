import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliciesChart06Component } from './policies-chart06.component';

describe('PoliciesChart06Component', () => {
  let component: PoliciesChart06Component;
  let fixture: ComponentFixture<PoliciesChart06Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliciesChart06Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliciesChart06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
