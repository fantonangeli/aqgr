import { TestBed } from '@angular/core/testing';

import { SpecieChart02Service } from './specie-chart02.service';

describe('SpecieChart02Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpecieChart02Service = TestBed.get(SpecieChart02Service);
    expect(service).toBeTruthy();
  });
});
