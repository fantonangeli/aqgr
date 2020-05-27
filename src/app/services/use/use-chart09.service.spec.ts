import { TestBed } from '@angular/core/testing';

import { UseChart09Service } from './use-chart09.service';

describe('UseChart09Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UseChart09Service = TestBed.get(UseChart09Service);
    expect(service).toBeTruthy();
  });
});
