import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { RouterTestingModule } from '@angular/router/testing';

import { FishStatTableComponent } from './fish-stat-table.component';

describe('FishStatTableComponent', () => {
  let component: FishStatTableComponent;
  let fixture: ComponentFixture<FishStatTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
        imports: [RouterTestingModule],
      declarations: [ FishStatTableComponent, FaIconComponent ]
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
