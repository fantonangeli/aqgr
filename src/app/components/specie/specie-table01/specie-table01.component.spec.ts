import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SpecieTable01Component } from './specie-table01.component';

describe('SpecieTable01Component', () => {
  let component: SpecieTable01Component;
  let fixture: ComponentFixture<SpecieTable01Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecieTable01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecieTable01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
