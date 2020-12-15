import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StackedBars01Component } from './stacked-bars01.component';

describe('StackedBars01Component', () => {
  let component: StackedBars01Component;
  let fixture: ComponentFixture<StackedBars01Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StackedBars01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackedBars01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
