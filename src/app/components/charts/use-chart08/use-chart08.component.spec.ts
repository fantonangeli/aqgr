import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseChart08Component } from './use-chart08.component';

describe('UseChart08Component', () => {
  let component: UseChart08Component;
  let fixture: ComponentFixture<UseChart08Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseChart08Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseChart08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
