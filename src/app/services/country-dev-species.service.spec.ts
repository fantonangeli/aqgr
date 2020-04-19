import { TestBed } from '@angular/core/testing';

import { CountryDevSpeciesService } from './country-dev-species.service';

describe('CountryDevSpeciesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountryDevSpeciesService = TestBed.get(CountryDevSpeciesService);
    expect(service).toBeTruthy();
  });
});
