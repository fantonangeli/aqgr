import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { CountryChart02Component } from './country-chart02.component';
import {Pie01Component} from '../pie01/pie01.component';

describe('CountryChart02Component', () => {
  let component: CountryChart02Component;
  let fixture: ComponentFixture<CountryChart02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports:[HttpClientModule],
      declarations: [ CountryChart02Component,Pie01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryChart02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
