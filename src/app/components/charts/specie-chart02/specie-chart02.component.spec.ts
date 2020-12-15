import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SpecieChart02Component } from './specie-chart02.component';

describe('SpecieChart02Component', () => {
  let component: SpecieChart02Component;
  let fixture: ComponentFixture<SpecieChart02Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecieChart02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecieChart02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
