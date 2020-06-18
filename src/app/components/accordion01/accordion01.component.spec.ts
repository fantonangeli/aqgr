import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartWrapper02Component } from './chart-wrapper02.component';

describe('ChartWrapper02Component', () => {
  let component: ChartWrapper02Component;
  let fixture: ComponentFixture<ChartWrapper02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartWrapper02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartWrapper02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
