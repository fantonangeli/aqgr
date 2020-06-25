import { TestBed } from '@angular/core/testing';

import { CommonChart09Service } from './common-chart09.service';

describe('CommonChart09Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommonChart09Service = TestBed.get(CommonChart09Service);
    expect(service).toBeTruthy();
  });
});
