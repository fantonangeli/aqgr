import { TestBed } from '@angular/core/testing';

import { CountrySFTypeService } from './country-sftype.service';

describe('CountrySFTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountrySFTypeService = TestBed.get(CountrySFTypeService);
    expect(service).toBeTruthy();
  });
});
