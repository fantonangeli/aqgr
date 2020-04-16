import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterTermsComponent } from './filter-terms.component';

describe('FilterTermsComponent', () => {
  let component: FilterTermsComponent;
  let fixture: ComponentFixture<FilterTermsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterTermsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
