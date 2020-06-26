import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryChart02Component } from './country-chart02.component';

describe('CountryChart02Component', () => {
  let component: CountryChart02Component;
  let fixture: ComponentFixture<CountryChart02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryChart02Component ]
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
