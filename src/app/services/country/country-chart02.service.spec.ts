import { TestBed } from '@angular/core/testing';

import { CountryChart02Service } from './country-chart02.service';

describe('CountryChart02Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountryChart02Service = TestBed.get(CountryChart02Service);
    expect(service).toBeTruthy();
  });
});
