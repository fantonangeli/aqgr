import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { CountrySpeciesService } from './country-species.service';

describe('CountrySpeciesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientModule]
  }));

  it('should be created', () => {
    const service: CountrySpeciesService = TestBed.get(CountrySpeciesService);
    expect(service).toBeTruthy();
  });
});
