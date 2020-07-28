import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecieChart03Component } from './specie-chart03.component';

describe('SpecieChart03Component', () => {
  let component: SpecieChart03Component;
  let fixture: ComponentFixture<SpecieChart03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecieChart03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecieChart03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
