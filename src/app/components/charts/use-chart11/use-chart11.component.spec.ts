import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UseChart11Component } from './use-chart11.component';

describe('UseChart11Component', () => {
  let component: UseChart11Component;
  let fixture: ComponentFixture<UseChart11Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UseChart11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseChart11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
