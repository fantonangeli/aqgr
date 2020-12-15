import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BaseChartRender01Component } from './base-chart-render01.component';

describe('BaseChartRender01Component', () => {
  let component: BaseChartRender01Component;
  let fixture: ComponentFixture<BaseChartRender01Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseChartRender01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseChartRender01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
