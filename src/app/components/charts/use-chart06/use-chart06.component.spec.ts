import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseChart06Component } from './use-chart06.component';

describe('UseChart06Component', () => {
  let component: UseChart06Component;
  let fixture: ComponentFixture<UseChart06Component>;

  beforeEach(async(() => {
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
