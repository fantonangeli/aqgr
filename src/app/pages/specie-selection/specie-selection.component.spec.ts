import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SpecieSelectionComponent } from './specie-selection.component';

describe('SpecieSelectionComponent', () => {
  let component: SpecieSelectionComponent;
  let fixture: ComponentFixture<SpecieSelectionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecieSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecieSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
