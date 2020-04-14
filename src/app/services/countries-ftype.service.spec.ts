import { TestBed } from '@angular/core/testing';

import { CountriesFtypeService } from './countries-ftype.service';

describe('CountriesFtypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountriesFtypeService = TestBed.get(CountriesFtypeService);
    expect(service).toBeTruthy();
  });
});
