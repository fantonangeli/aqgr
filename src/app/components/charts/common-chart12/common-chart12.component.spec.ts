import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { CommonChart12Component } from './common-chart12.component';
import {Pie01Component} from '../pie01/pie01.component';

describe('CommonChart01Component', () => {
  let component: CommonChart01Component;
  let fixture: ComponentFixture<CommonChart01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports:[HttpClientModule],
        declarations: [ CommonChart01Component, Pie01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonChart01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
