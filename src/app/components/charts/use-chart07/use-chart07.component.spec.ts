import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseChart07Component } from './use-chart07.component';

describe('UseChart07Component', () => {
  let component: UseChart07Component;
  let fixture: ComponentFixture<UseChart07Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseChart07Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseChart07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
