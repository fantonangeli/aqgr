import { TestBed } from '@angular/core/testing';

import { ContinentsService } from './continents.service';

describe('ContinentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContinentsService = TestBed.get(ContinentsService);
    expect(service).toBeTruthy();
  });
});
