import { TestBed } from '@angular/core/testing';

import { PoliciesChart01Service } from './policies-chart01.service';

describe('PoliciesChart01Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PoliciesChart01Service = TestBed.get(PoliciesChart01Service);
    expect(service).toBeTruthy();
  });
});
