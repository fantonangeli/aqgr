import { TestBed } from '@angular/core/testing';

import { CountryInfoService } from './country-info.service';

describe('CountryInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountryInfoService = TestBed.get(CountryInfoService);
    expect(service).toBeTruthy();
  });
});
