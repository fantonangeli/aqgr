import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {SearchModule} from './components/search/search.module';

import { AppComponent } from './app.component';
import { DynamicHTMLModule, DynamicHTMLComponent } from './core/components/dynamic-html';
import { FishStatTableComponent } from './components/fish-stat-table/fish-stat-table.component';
import { SpecFilterComponent } from './components/spec-filter/spec-filter.component';
import { CountryComponent } from './pages/country/country.component';
import { HomeComponent } from './pages/home/home.component';
import { Pie01Component } from './components/charts/pie01/pie01.component';
import { CountryChart01Component } from './components/charts/country-chart01/country-chart01.component';
import { CountryChart02Component } from './components/charts/country-chart02/country-chart02.component';
import { Bars01Component } from './components/charts/bars01/bars01.component';
import { CountryChart03Component } from './components/charts/country-chart03/country-chart03.component';
import { CountriesChart01Component } from './components/charts/countries-chart01/countries-chart01.component';
import { StackedBars01Component } from './components/charts/stacked-bars01/stacked-bars01.component';
import { CountriesChart02Component } from './components/charts/countries-chart02/countries-chart02.component';
import { CountriesChart03Component } from './components/charts/countries-chart03/countries-chart03.component';
import { FiltersComponent } from './components/home/filters/filters.component';
import { TreeTableComponent } from './components/tree-table/tree-table.component';
import { ConservationAndSustainableUseComponent } from './pages/conservation-and-sustainable-use/conservation-and-sustainable-use.component';
import { WorldComponent } from './pages/world/world.component';
import { UseChart01Component } from './components/charts/use-chart01/use-chart01.component';
import { UseChart02Component } from './components/charts/use-chart02/use-chart02.component';
import { UseChart03Component } from './components/charts/use-chart03/use-chart03.component';
import { UseChart04Component } from './components/charts/use-chart04/use-chart04.component';
import { StackedColumns01Component } from './components/charts/stacked-columns01/stacked-columns01.component';
import { Columns01Component } from './components/charts/columns01/columns01.component';
import { UseChart05Component } from './components/charts/use-chart05/use-chart05.component';
import { UseChart06Component } from './components/charts/use-chart06/use-chart06.component';
import { UseChart07Component } from './components/charts/use-chart07/use-chart07.component';
import { UseChart10Component } from './components/charts/use-chart10/use-chart10.component';
import { UseChart11Component } from './components/charts/use-chart11/use-chart11.component';
import { UseChart12Component } from './components/charts/use-chart12/use-chart12.component';
import { UseChart13Component } from './components/charts/use-chart13/use-chart13.component';

@NgModule({
  declarations: [
    AppComponent,
    FishStatTableComponent,
    SpecFilterComponent,
    CountryComponent,
    HomeComponent,
    Pie01Component,
    CountryChart01Component,
    CountryChart02Component,
    Bars01Component,
    CountryChart03Component,
    CountriesChart01Component,
    StackedBars01Component,
    CountriesChart02Component,
    CountriesChart03Component,
    FiltersComponent,
    TreeTableComponent,
    ConservationAndSustainableUseComponent,
    WorldComponent,
    UseChart01Component,
    UseChart02Component,
    UseChart03Component,
    UseChart04Component,
    StackedColumns01Component,
    Columns01Component,
    UseChart05Component,
    UseChart06Component,
    UseChart07Component,
    UseChart10Component,
    UseChart11Component,
    UseChart12Component,
    UseChart13Component,
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
    SearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
