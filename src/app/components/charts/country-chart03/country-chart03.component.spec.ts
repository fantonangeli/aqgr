import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryChart03Component } from './country-chart03.component';

describe('CountryChart03Component', () => {
  let component: CountryChart03Component;
  let fixture: ComponentFixture<CountryChart03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryChart03Component ]
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
