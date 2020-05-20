import { TestBed } from '@angular/core/testing';

import { UseChart04Service } from './use-chart04.service';

describe('UseChart04Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UseChart04Service = TestBed.get(UseChart04Service);
    expect(service).toBeTruthy();
  });
});
