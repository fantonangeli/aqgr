import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { CountryChart03Component } from './country-chart03.component';
import {Bars01Component} from '../bars01/bars01.component';

describe('CountryChart03Component', () => {
  let component: CountryChart03Component;
  let fixture: ComponentFixture<CountryChart03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports:[HttpClientModule],
      declarations: [ CountryChart03Component, Bars01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryChart03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
