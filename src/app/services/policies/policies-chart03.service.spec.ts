import { TestBed } from '@angular/core/testing';

import { PoliciesChart03Service } from './policies-chart03.service';

describe('PoliciesChart03Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PoliciesChart03Service = TestBed.get(PoliciesChart03Service);
    expect(service).toBeTruthy();
  });
});
