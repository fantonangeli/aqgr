import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesChart02Component } from './countries-chart02.component';

describe('CountriesChart02Component', () => {
  let component: CountriesChart02Component;
  let fixture: ComponentFixture<CountriesChart02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountriesChart02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesChart02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
