import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseChart04Component } from './use-chart04.component';

describe('UseChart04Component', () => {
  let component: UseChart04Component;
  let fixture: ComponentFixture<UseChart04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseChart04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseChart04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
