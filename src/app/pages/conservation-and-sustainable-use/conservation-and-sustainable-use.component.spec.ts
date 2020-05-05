import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConservationAndSustainableUseComponent } from './conservation-and-sustainable-use.component';

describe('ConservationAndSustainableUseComponent', () => {
  let component: ConservationAndSustainableUseComponent;
  let fixture: ComponentFixture<ConservationAndSustainableUseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConservationAndSustainableUseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConservationAndSustainableUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
