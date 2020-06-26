import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonChart04Component } from './common-chart04.component';

describe('CommonChart04Component', () => {
  let component: CommonChart04Component;
  let fixture: ComponentFixture<CommonChart04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonChart04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonChart04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
