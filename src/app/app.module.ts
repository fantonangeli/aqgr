import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
