import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseChart01Component } from './use-chart01.component';

describe('UseChart01Component', () => {
  let component: UseChart01Component;
  let fixture: ComponentFixture<UseChart01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseChart01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseChart01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
