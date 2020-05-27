import { TestBed } from '@angular/core/testing';

import { UseChart11Service } from './use-chart11.service';

describe('UseChart11Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UseChart11Service = TestBed.get(UseChart11Service);
    expect(service).toBeTruthy();
  });
});
