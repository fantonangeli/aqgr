import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { CountrySFTypeService } from './country-sftype.service';

describe('CountrySFTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientModule]
  }));

  it('should be created', () => {
    const service: CountrySFTypeService = TestBed.get(CountrySFTypeService);
    expect(service).toBeTruthy();
  });
});
