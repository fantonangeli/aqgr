import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StackedColumns01Component } from './stacked-columns01.component';

describe('StackedColumns01Component', () => {
  let component: StackedColumns01Component;
  let fixture: ComponentFixture<StackedColumns01Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StackedColumns01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackedColumns01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
