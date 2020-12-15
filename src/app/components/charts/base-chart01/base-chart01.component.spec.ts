import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BaseChart01Component } from './base-chart01.component';

describe('BaseChart01Component', () => {
  let component: BaseChart01Component;
  let fixture: ComponentFixture<BaseChart01Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseChart01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseChart01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
