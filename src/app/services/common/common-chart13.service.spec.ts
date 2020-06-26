import { TestBed } from '@angular/core/testing';

import { Common13Service } from './common-chart13.service';

describe('Common13Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Common13Service = TestBed.get(Common13Service);
    expect(service).toBeTruthy();
  });
});
