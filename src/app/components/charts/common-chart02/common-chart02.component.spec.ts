import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonChart02Component } from './common-chart02.component';

describe('CommonChart02Component', () => {
  let component: CommonChart02Component;
  let fixture: ComponentFixture<CommonChart02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonChart02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonChart02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
