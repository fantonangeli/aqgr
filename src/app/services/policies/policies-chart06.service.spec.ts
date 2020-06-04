import { TestBed } from '@angular/core/testing';

import { PoliciesChart06Service } from './policies-chart06.service';

describe('PoliciesChart06Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PoliciesChart06Service = TestBed.get(PoliciesChart06Service);
    expect(service).toBeTruthy();
  });
});
