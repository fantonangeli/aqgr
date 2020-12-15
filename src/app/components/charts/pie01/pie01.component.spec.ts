import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Pie01Component } from './pie01.component';

describe('Pie01Component', () => {
  let component: Pie01Component;
  let fixture: ComponentFixture<Pie01Component>;

  beforeEach(waitForAsync(() => {
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
