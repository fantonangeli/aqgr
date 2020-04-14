import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { SpeciesService } from './species.service';

describe('SpeciesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientModule]
  }));

  it('should be created', () => {
    const service: SpeciesService = TestBed.get(SpeciesService);
    expect(service).toBeTruthy();
  });
});
