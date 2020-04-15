import { TestBed } from '@angular/core/testing';

import { CountriesSFTypeService } from './countrs-sftype.service';

describe('CountrsSFTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountrsSFTypeService = TestBed.get(CountrsSFTypeService);
    expect(service).toBeTruthy();
  });
});
