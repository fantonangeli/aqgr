import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseChart09Component } from './use-chart09.component';

describe('UseChart09Component', () => {
  let component: UseChart09Component;
  let fixture: ComponentFixture<UseChart09Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseChart09Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseChart09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
