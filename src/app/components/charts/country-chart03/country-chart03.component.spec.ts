import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CountryChart03Component } from './country-chart03.component';

describe('CountryChart03Component', () => {
  let component: CountryChart03Component;
  let fixture: ComponentFixture<CountryChart03Component>;

  beforeEach(waitForAsync(() => {
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
