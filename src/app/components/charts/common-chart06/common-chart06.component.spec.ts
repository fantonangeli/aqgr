import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { CommonChart03Component } from './common-chart03.component';
import {Bars01Component} from '../bars01/bars01.component';

describe('CommonChart03Component', () => {
  let component: CommonChart03Component;
  let fixture: ComponentFixture<CommonChart03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports:[HttpClientModule],
      declarations: [ CommonChart03Component, Bars01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonChart03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
