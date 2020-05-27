import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseChart13Component } from './use-chart13.component';

describe('UseChart13Component', () => {
  let component: UseChart13Component;
  let fixture: ComponentFixture<UseChart13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseChart13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseChart13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
