import { TestBed } from '@angular/core/testing';

import { PoliciesChart04Service } from './policies-chart04.service';

describe('PoliciesChart04Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PoliciesChart04Service = TestBed.get(PoliciesChart04Service);
    expect(service).toBeTruthy();
  });
});
