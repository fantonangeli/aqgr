import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Columns01Component } from './columns01.component';

describe('Columns01Component', () => {
  let component: Columns01Component;
  let fixture: ComponentFixture<Columns01Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Columns01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Columns01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
