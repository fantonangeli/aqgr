import { TestBed } from '@angular/core/testing';

import { UseChart02Service } from './use-chart02.service';

describe('UseChart02Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UseChart02Service = TestBed.get(UseChart02Service);
    expect(service).toBeTruthy();
  });
});
