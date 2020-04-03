import { TestBed } from '@angular/core/testing';

import { SpeciesService } from './species.service';

describe('SpeciesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpeciesService = TestBed.get(SpeciesService);
    expect(service).toBeTruthy();
  });
});
