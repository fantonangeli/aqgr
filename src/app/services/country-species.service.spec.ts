import { TestBed } from '@angular/core/testing';

import { CountrySpeciesService } from './country-species.service';

describe('CountrySpeciesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountrySpeciesService = TestBed.get(CountrySpeciesService);
    expect(service).toBeTruthy();
  });
});
