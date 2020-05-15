import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseChart02Component } from './use-chart02.component';

describe('UseChart02Component', () => {
  let component: UseChart02Component;
  let fixture: ComponentFixture<UseChart02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseChart02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseChart02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
