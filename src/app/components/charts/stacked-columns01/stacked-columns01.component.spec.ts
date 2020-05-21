import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackedColumns01Component } from './stacked-columns01.component';

describe('StackedColumns01Component', () => {
  let component: StackedColumns01Component;
  let fixture: ComponentFixture<StackedColumns01Component>;

  beforeEach(async(() => {
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
