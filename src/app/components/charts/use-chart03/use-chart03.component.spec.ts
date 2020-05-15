import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseChart03Component } from './use-chart03.component';

describe('UseChart03Component', () => {
  let component: UseChart03Component;
  let fixture: ComponentFixture<UseChart03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseChart03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseChart03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
