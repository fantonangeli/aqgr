import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesChart03Component } from './countries-chart03.component';

describe('CountriesChart03Component', () => {
  let component: CountriesChart03Component;
  let fixture: ComponentFixture<CountriesChart03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountriesChart03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesChart03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
