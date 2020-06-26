import { TestBed } from '@angular/core/testing';

import { CountryChart01Service } from './country-chart01.service';

describe('CountryChart01Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountryChart01Service = TestBed.get(CountryChart01Service);
    expect(service).toBeTruthy();
  });
});
