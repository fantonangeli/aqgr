import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryChart05Component } from './country-chart05.component';

describe('CountryChart05Component', () => {
  let component: CountryChart05Component;
  let fixture: ComponentFixture<CountryChart05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryChart05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryChart05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
