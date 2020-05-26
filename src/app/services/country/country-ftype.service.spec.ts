import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { CountryFTypeService } from './country-ftype.service';

describe('CountryFTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientModule]
  }));

  it('should be created', () => {
    const service: CountryFTypeService = TestBed.get(CountryFTypeService);
    expect(service).toBeTruthy();
  });
});
