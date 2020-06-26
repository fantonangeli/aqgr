import { TestBed } from '@angular/core/testing';

import { CommonChart05Service } from './common-chart05.service';

describe('CommonChart05Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommonChart05Service = TestBed.get(CommonChart05Service);
    expect(service).toBeTruthy();
  });
});
