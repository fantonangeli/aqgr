import { TestBed } from '@angular/core/testing';

import { UseChart13Service } from './use-chart13.service';

describe('UseChart13Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UseChart13Service = TestBed.get(UseChart13Service);
    expect(service).toBeTruthy();
  });
});
