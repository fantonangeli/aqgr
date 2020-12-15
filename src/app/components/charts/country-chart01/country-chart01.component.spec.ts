import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CountryChart01Component } from './country-chart01.component';

describe('CountryChart01Component', () => {
  let component: CountryChart01Component;
  let fixture: ComponentFixture<CountryChart01Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryChart01Component ]
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
