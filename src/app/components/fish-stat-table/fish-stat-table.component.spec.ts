import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FishStatTableComponent } from './fish-stat-table.component';

describe('FishStatTableComponent', () => {
  let component: FishStatTableComponent;
  let fixture: ComponentFixture<FishStatTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FishStatTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FishStatTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
