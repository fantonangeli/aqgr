import { TestBed } from '@angular/core/testing';

import { CountriesSpeciesService } from './countries-species.service';

describe('CountriesSpeciesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountriesSpeciesService = TestBed.get(CountriesSpeciesService);
    expect(service).toBeTruthy();
  });
});
