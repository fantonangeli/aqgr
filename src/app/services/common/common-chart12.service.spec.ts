import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { Common12Service } from './country-ftype.service';

describe('Common12Service', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientModule]
  }));

  it('should be created', () => {
    const service: Common12Service = TestBed.get(Common12Service);
    expect(service).toBeTruthy();
  });
});
