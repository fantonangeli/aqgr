import { TestBed } from '@angular/core/testing';

import { UseChart07Service } from './use-chart07.service';

describe('UseChart07Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UseChart07Service = TestBed.get(UseChart07Service);
    expect(service).toBeTruthy();
  });
});
