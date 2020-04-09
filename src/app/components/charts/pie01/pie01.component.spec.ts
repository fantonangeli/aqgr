import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pie01Component } from './pie01.component';

describe('Pie01Component', () => {
  let component: Pie01Component;
  let fixture: ComponentFixture<Pie01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pie01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pie01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
