import { TestBed } from '@angular/core/testing';

import { UseChart06Service } from './use-chart06.service';

describe('UseChart06Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UseChart06Service = TestBed.get(UseChart06Service);
    expect(service).toBeTruthy();
  });
});
