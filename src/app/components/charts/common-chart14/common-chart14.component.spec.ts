import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonChart14Component } from './common-chart14.component';

describe('CommonChart14Component', () => {
  let component: CommonChart14Component;
  let fixture: ComponentFixture<CommonChart14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonChart14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonChart14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
