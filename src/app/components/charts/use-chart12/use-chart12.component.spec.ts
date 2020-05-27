import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseChart12Component } from './use-chart12.component';

describe('UseChart12Component', () => {
  let component: UseChart12Component;
  let fixture: ComponentFixture<UseChart12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseChart12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseChart12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
