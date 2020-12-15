import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UseChart10Component } from './use-chart10.component';

describe('UseChart10Component', () => {
  let component: UseChart10Component;
  let fixture: ComponentFixture<UseChart10Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UseChart10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseChart10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
