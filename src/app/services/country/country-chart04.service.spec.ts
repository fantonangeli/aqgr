import { TestBed } from '@angular/core/testing';

import { CountryChart04Service } from './country-chart04.service';

describe('CountryChart04Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountryChart04Service = TestBed.get(CountryChart04Service);
    expect(service).toBeTruthy();
  });
});
