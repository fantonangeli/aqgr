import { TestBed } from '@angular/core/testing';

import { GlobalInfoService } from './global-info.service';

describe('GlobalInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalInfoService = TestBed.get(GlobalInfoService);
    expect(service).toBeTruthy();
  });
});
