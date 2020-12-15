import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SpcecieChart01Component } from './spcecie-chart01.component';

describe('SpcecieChart01Component', () => {
  let component: SpcecieChart01Component;
  let fixture: ComponentFixture<SpcecieChart01Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SpcecieChart01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpcecieChart01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
