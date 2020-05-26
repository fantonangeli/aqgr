import { TestBed } from '@angular/core/testing';

import { CountryChart03Service } from './country-chart03.service';

describe('CountryChart03Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountryChart03Service = TestBed.get(CountryChart03Service);
    expect(service).toBeTruthy();
  });
});
