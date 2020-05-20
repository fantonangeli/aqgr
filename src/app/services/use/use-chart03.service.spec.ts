import { TestBed } from '@angular/core/testing';

import { UseChart03Service } from './use-chart03.service';

describe('UseChart03Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UseChart03Service = TestBed.get(UseChart03Service);
    expect(service).toBeTruthy();
  });
});
