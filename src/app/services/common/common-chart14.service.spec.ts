import { TestBed } from '@angular/core/testing';

import { CommonChart14Service } from './common-chart14.service';

describe('CommonChart14Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommonChart14Service = TestBed.get(CommonChart14Service);
    expect(service).toBeTruthy();
  });
});
