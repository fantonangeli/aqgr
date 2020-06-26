import { TestBed } from '@angular/core/testing';

import { CommonChart06Service } from './common-chart06.service';

describe('CommonChart06Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommonChart06Service = TestBed.get(CommonChart06Service);
    expect(service).toBeTruthy();
  });
});
