import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bars01Component } from './bars01.component';

describe('Bars01Component', () => {
  let component: Bars01Component;
  let fixture: ComponentFixture<Bars01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bars01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bars01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
