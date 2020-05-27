import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseChart05Component } from './use-chart05.component';

describe('UseChart05Component', () => {
  let component: UseChart05Component;
  let fixture: ComponentFixture<UseChart05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseChart05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseChart05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
