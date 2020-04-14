import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesChart01Component } from './countries-chart01.component';

describe('CountriesChart01Component', () => {
  let component: CountriesChart01Component;
  let fixture: ComponentFixture<CountriesChart01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountriesChart01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesChart01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
