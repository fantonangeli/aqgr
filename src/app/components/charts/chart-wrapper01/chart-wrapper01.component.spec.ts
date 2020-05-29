import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartWrapper01Component } from './chart-wrapper01.component';

describe('ChartWrapper01Component', () => {
  let component: ChartWrapper01Component;
  let fixture: ComponentFixture<ChartWrapper01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartWrapper01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartWrapper01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
