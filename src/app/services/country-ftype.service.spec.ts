import { TestBed } from '@angular/core/testing';

import { CountryFTypeService } from './country-ftype.service';

describe('CountryFTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountryFTypeService = TestBed.get(CountryFTypeService);
    expect(service).toBeTruthy();
  });
});
