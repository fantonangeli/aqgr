import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryTable01Component } from './country-table01.component';

describe('CountryTable01Component', () => {
  let component: CountryTable01Component;
  let fixture: ComponentFixture<CountryTable01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryTable01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryTable01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
