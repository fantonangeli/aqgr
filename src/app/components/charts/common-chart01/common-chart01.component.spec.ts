import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CommonChart01Component } from './common-chart01.component';

describe('CommonChart01Component', () => {
  let component: CommonChart01Component;
  let fixture: ComponentFixture<CommonChart01Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonChart01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonChart01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
