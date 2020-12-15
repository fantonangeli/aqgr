import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UseChart06Component } from './use-chart06.component';

describe('UseChart06Component', () => {
  let component: UseChart06Component;
  let fixture: ComponentFixture<UseChart06Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UseChart06Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseChart06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
