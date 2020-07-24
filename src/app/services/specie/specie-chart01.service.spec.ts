import { TestBed } from '@angular/core/testing';

import { SpecieChart01Service } from './specie-chart01.service';

describe('SpecieChart01Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpecieChart01Service = TestBed.get(SpecieChart01Service);
    expect(service).toBeTruthy();
  });
});
