import { TestBed } from '@angular/core/testing';

import { UseChart08Service } from './use-chart08.service';

describe('UseChart08Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UseChart08Service = TestBed.get(UseChart08Service);
    expect(service).toBeTruthy();
  });
});
