import { TestBed } from '@angular/core/testing';

import { UseChart05Service } from './use-chart05.service';

describe('UseChart05Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UseChart05Service = TestBed.get(UseChart05Service);
    expect(service).toBeTruthy();
  });
});
