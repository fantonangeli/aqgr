import { TestBed } from '@angular/core/testing';

import { CommonChart15Service } from './common-chart15.service';

describe('CommonChart15Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommonChart15Service = TestBed.get(CommonChart15Service);
    expect(service).toBeTruthy();
  });
});
