import { TestBed } from '@angular/core/testing';

import { SpecieChart03Service } from './specie-chart03.service';

describe('SpecieChart03Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpecieChart03Service = TestBed.get(SpecieChart03Service);
    expect(service).toBeTruthy();
  });
});
