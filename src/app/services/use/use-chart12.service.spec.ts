import { TestBed } from '@angular/core/testing';

import { UseChart12Service } from './use-chart12.service';

describe('UseChart12Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UseChart12Service = TestBed.get(UseChart12Service);
    expect(service).toBeTruthy();
  });
});
