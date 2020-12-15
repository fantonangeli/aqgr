import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SpeciesListComponent } from './species-list.component';

describe('SpeciesListComponent', () => {
  let component: SpeciesListComponent;
  let fixture: ComponentFixture<SpeciesListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeciesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeciesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
