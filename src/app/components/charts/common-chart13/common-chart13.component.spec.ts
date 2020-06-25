import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { CommonChart02Component } from './common-chart02.component';
import {Pie01Component} from '../pie01/pie01.component';

describe('CommonChart02Component', () => {
  let component: CommonChart02Component;
  let fixture: ComponentFixture<CommonChart02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports:[HttpClientModule],
      declarations: [ CommonChart02Component,Pie01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonChart02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
