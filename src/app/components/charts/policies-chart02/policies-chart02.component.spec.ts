import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliciesChart02Component } from './policies-chart02.component';

describe('PoliciesChart02Component', () => {
  let component: PoliciesChart02Component;
  let fixture: ComponentFixture<PoliciesChart02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliciesChart02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliciesChart02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
