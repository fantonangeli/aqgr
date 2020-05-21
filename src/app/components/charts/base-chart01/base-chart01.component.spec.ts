import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseChart01Component } from './base-chart01.component';

describe('BaseChart01Component', () => {
  let component: BaseChart01Component;
  let fixture: ComponentFixture<BaseChart01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseChart01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseChart01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
