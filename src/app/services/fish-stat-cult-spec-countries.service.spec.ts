import { TestBed } from '@angular/core/testing';

import { FishStatCultSpecCountriesService } from './fish-stat-cult-spec-countries.service';

describe('FishStatCultSpecCountriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FishStatCultSpecCountriesService = TestBed.get(FishStatCultSpecCountriesService);
    expect(service).toBeTruthy();
  });
});
