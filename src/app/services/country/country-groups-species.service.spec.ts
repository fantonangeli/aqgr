import { TestBed } from '@angular/core/testing';

import { CountryGroupsSpeciesService } from './country-groups-species.service';

describe('CountryGroupsSpeciesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountryGroupsSpeciesService = TestBed.get(CountryGroupsSpeciesService);
    expect(service).toBeTruthy();
  });
});
