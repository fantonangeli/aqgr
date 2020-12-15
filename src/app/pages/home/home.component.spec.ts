import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { DynamicHTMLModule, DynamicHTMLComponent } from '../../core/components/dynamic-html';
import {FishStatCultSpecCountriesService} from '../../services/fish-stat-cult-spec-countries.service';
import { SpecFilterComponent } from '../../components/spec-filter/spec-filter.component';
import { FishStatTableComponent } from '../../components/fish-stat-table/fish-stat-table.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
        imports:[],
      declarations: [ HomeComponent, SpecFilterComponent, FishStatTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
