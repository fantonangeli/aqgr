import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { CountryComponent } from './country.component';
import { CountryChart01Component } from '../../components/charts/country-chart01/country-chart01.component';
import { CountryChart02Component } from '../../components/charts/country-chart02/country-chart02.component';
import { CountryChart03Component } from '../../components/charts/country-chart03/country-chart03.component';
import {Pie01Component} from '../../components/charts/pie01/pie01.component';
import {Bars01Component} from '../../components/charts/bars01/bars01.component';

describe('CountryComponent', () => {
  let component: CountryComponent;
  let fixture: ComponentFixture<CountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports:[HttpClientModule],
      declarations: [ CountryComponent, CountryChart01Component, CountryChart02Component, CountryChart03Component, Pie01Component, Bars01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
