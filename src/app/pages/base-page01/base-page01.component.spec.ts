import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BasePage01Component } from './base-page01.component';

describe('BasePage01Component', () => {
  let component: BasePage01Component;
  let fixture: ComponentFixture<BasePage01Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BasePage01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasePage01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
