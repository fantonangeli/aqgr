import { TestBed } from '@angular/core/testing';

import { CountryChart05Service } from './country-chart05.service';

describe('CountryChart05Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountryChart05Service = TestBed.get(CountryChart05Service);
    expect(service).toBeTruthy();
  });
});
