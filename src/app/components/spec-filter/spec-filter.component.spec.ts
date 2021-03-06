import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SpecFilterComponent } from './spec-filter.component';

describe('SpecFilterComponent', () => {
  let component: SpecFilterComponent;
  let fixture: ComponentFixture<SpecFilterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
