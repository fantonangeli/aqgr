import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { FishStatCultSpecCountriesService } from './fish-stat-cult-spec-countries.service';

describe('FishStatCultSpecCountriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientModule]
  }));

  it('should be created', () => {
    const service: FishStatCultSpecCountriesService = TestBed.get(FishStatCultSpecCountriesService);
    expect(service).toBeTruthy();
  });
});
