import { TestBed } from '@angular/core/testing';

import { PoliciesChart02Service } from './policies-chart02.service';

describe('PoliciesChart02Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PoliciesChart02Service = TestBed.get(PoliciesChart02Service);
    expect(service).toBeTruthy();
  });
});
