import { TestBed } from '@angular/core/testing';

import { SpecieInfoService } from './specie-info.service';

describe('SpecieInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpecieInfoService = TestBed.get(SpecieInfoService);
    expect(service).toBeTruthy();
  });
});
