import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliciesChart05Component } from './policies-chart05.component';

describe('PoliciesChart05Component', () => {
  let component: PoliciesChart05Component;
  let fixture: ComponentFixture<PoliciesChart05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliciesChart05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliciesChart05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
