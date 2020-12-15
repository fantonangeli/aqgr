import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CountryChart04Component } from './country-chart04.component';

describe('CountryChart04Component', () => {
  let component: CountryChart04Component;
  let fixture: ComponentFixture<CountryChart04Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryChart04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryChart04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
