import { TestBed } from '@angular/core/testing';

import { TaxonomiesService } from './taxonomies.service';

describe('TaxonomiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaxonomiesService = TestBed.get(TaxonomiesService);
    expect(service).toBeTruthy();
  });
});
