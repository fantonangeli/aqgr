import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonChart15Component } from './common-chart15.component';

describe('CommonChart15Component', () => {
  let component: CommonChart15Component;
  let fixture: ComponentFixture<CommonChart15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonChart15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonChart15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
