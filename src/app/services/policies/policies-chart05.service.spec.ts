import { TestBed } from '@angular/core/testing';

import { PoliciesChart05Service } from './policies-chart05.service';

describe('PoliciesChart05Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PoliciesChart05Service = TestBed.get(PoliciesChart05Service);
    expect(service).toBeTruthy();
  });
});
