import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SearchPillComponent } from './search-pill.component';

describe('SearchPillComponent', () => {
  let component: SearchPillComponent;
  let fixture: ComponentFixture<SearchPillComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
