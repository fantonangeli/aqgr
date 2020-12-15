import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UseChart13Component } from './use-chart13.component';

describe('UseChart13Component', () => {
  let component: UseChart13Component;
  let fixture: ComponentFixture<UseChart13Component>;

  beforeEach(waitForAsync(() => {
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
