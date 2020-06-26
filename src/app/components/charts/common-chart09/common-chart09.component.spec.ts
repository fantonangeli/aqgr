import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonChart05Component } from './common-chart05.component';

describe('CommonChart05Component', () => {
  let component: CommonChart05Component;
  let fixture: ComponentFixture<CommonChart05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonChart05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonChart05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
