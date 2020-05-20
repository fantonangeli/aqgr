import { TestBed } from '@angular/core/testing';

import { UseChart01Service } from './use-chart01.service';

describe('UseChart01Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UseChart01Service = TestBed.get(UseChart01Service);
    expect(service).toBeTruthy();
  });
});
