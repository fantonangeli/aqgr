import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Donut01Component } from './donut01.component';

describe('Donut01Component', () => {
  let component: Donut01Component;
  let fixture: ComponentFixture<Donut01Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Donut01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Donut01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
