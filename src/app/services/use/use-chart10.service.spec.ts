import { TestBed } from '@angular/core/testing';

import { UseChart10Service } from './use-chart10.service';

describe('UseChart10Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UseChart10Service = TestBed.get(UseChart10Service);
    expect(service).toBeTruthy();
  });
});
