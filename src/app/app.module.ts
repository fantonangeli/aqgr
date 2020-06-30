import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {SearchModule} from './components/search/search.module';

//ngx-bootstrap
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { AppComponent } from './app.component';
import { DynamicHTMLModule, DynamicHTMLComponent } from './core/components/dynamic-html';
import { FishStatTableComponent } from './components/fish-stat-table/fish-stat-table.component';
import { SpecFilterComponent } from './components/spec-filter/spec-filter.component';
import { CountryComponent } from './pages/country/country.component';
import { HomeComponent } from './pages/home/home.component';
import { Pie01Component } from './components/charts/pie01/pie01.component';
import { CommonChart12Component } from './components/charts/common-chart12/common-chart12.component';
import { CommonChart13Component } from './components/charts/common-chart13/common-chart13.component';
import { Bars01Component } from './components/charts/bars01/bars01.component';
import { CommonChart06Component } from './components/charts/common-chart06/common-chart06.component';
import { CommonChart01Component } from './components/charts/common-chart01/common-chart01.component';
import { StackedBars01Component } from './components/charts/stacked-bars01/stacked-bars01.component';
import { CommonChart02Component } from './components/charts/common-chart02/common-chart02.component';
import { CountriesChart03Component } from './components/charts/countries-chart03/countries-chart03.component';
import { FiltersComponent } from './components/home/filters/filters.component';
import { TreeTableComponent } from './components/tree-table/tree-table.component';
import { ConservationAndSustainableUseComponent } from './pages/conservation-and-sustainable-use/conservation-and-sustainable-use.component';
import { WorldComponent } from './pages/world/world.component';
import { CommonChart05Component } from './components/charts/common-chart05/common-chart05.component';
import { UseChart02Component } from './components/charts/use-chart02/use-chart02.component';
import { UseChart03Component } from './components/charts/use-chart03/use-chart03.component';
import { CommonChart04Component } from './components/charts/common-chart04/common-chart04.component';
import { StackedColumns01Component } from './components/charts/stacked-columns01/stacked-columns01.component';
import { Columns01Component } from './components/charts/columns01/columns01.component';
import { CommonChart09Component } from './components/charts/common-chart09/common-chart09.component';
import { UseChart06Component } from './components/charts/use-chart06/use-chart06.component';
import { UseChart07Component } from './components/charts/use-chart07/use-chart07.component';
import { UseChart10Component } from './components/charts/use-chart10/use-chart10.component';
import { UseChart11Component } from './components/charts/use-chart11/use-chart11.component';
import { UseChart12Component } from './components/charts/use-chart12/use-chart12.component';
import { UseChart13Component } from './components/charts/use-chart13/use-chart13.component';
import { UseChart08Component } from './components/charts/use-chart08/use-chart08.component';
import { UseChart09Component } from './components/charts/use-chart09/use-chart09.component';
import { ChartWrapper01Component } from './components/charts/chart-wrapper01/chart-wrapper01.component';
import { PoliciesComponent } from './pages/policies/policies.component';
import { PoliciesChart01Component } from './components/charts/policies-chart01/policies-chart01.component';
import { PoliciesChart02Component } from './components/charts/policies-chart02/policies-chart02.component';
import { PoliciesChart03Component } from './components/charts/policies-chart03/policies-chart03.component';
import { PoliciesChart04Component } from './components/charts/policies-chart04/policies-chart04.component';
import { PoliciesChart05Component } from './components/charts/policies-chart05/policies-chart05.component';
import { PoliciesChart06Component } from './components/charts/policies-chart06/policies-chart06.component';
import { SpeciesListComponent } from './components/country/species-list/species-list.component';
import { Accordion01Component } from './components/accordion01/accordion01.component';
import { CountryTable01Component } from './components/country/country-table01/country-table01.component';
import { CountryChart01Component } from './components/charts/country-chart01/country-chart01.component';
import { CountryChart02Component } from './components/charts/country-chart02/country-chart02.component';
import { CountryChart03Component } from './components/charts/country-chart03/country-chart03.component';
import { CountryChart04Component } from './components/charts/country-chart04/country-chart04.component';
import { CountryChart05Component } from './components/charts/country-chart05/country-chart05.component';

@NgModule({
  declarations: [
    AppComponent,
    FishStatTableComponent,
    SpecFilterComponent,
    CountryComponent,
    HomeComponent,
    Pie01Component,
    CommonChart01Component,
    CommonChart02Component,
    Bars01Component,
    CommonChart06Component,
    CommonChart12Component,
    StackedBars01Component,
    CommonChart13Component,
    CountriesChart03Component,
    FiltersComponent,
    TreeTableComponent,
    ConservationAndSustainableUseComponent,
    WorldComponent,
    CommonChart05Component,
    UseChart02Component,
    UseChart03Component,
    CommonChart04Component,
    StackedColumns01Component,
    Columns01Component,
    CommonChart09Component,
    UseChart06Component,
    UseChart07Component,
    UseChart10Component,
    UseChart11Component,
    UseChart12Component,
    UseChart13Component,
    UseChart08Component,
    UseChart09Component,
    ChartWrapper01Component,
    PoliciesComponent,
    PoliciesChart01Component,
    PoliciesChart02Component,
    PoliciesChart03Component,
    PoliciesChart04Component,
    PoliciesChart05Component,
    PoliciesChart06Component,
    SpeciesListComponent,
    Accordion01Component,
    CountryTable01Component,
    CountryChart01Component,
    CountryChart02Component,
    CountryChart03Component,
    CountryChart04Component,
    CountryChart05Component,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    HttpClientModule,
    DynamicHTMLModule.forRoot({
      components: [
      ]
    }),
    NgSelectModule, 
    FormsModule,
    SearchModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
