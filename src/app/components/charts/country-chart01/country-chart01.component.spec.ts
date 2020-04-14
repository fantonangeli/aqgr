import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { CountryChart01Component } from './country-chart01.component';
import {Pie01Component} from '../pie01/pie01.component';

describe('CountryChart01Component', () => {
  let component: CountryChart01Component;
  let fixture: ComponentFixture<CountryChart01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports:[HttpClientModule],
        declarations: [ CountryChart01Component, Pie01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryChart01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
