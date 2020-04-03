import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicHTMLModule, DynamicHTMLComponent } from './core/components/dynamic-html';
import { FishStatTableComponent } from './components/fish-stat-table/fish-stat-table.component';
import { SpecFilterComponent } from './components/spec-filter/spec-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    FishStatTableComponent,
    SpecFilterComponent,
  ],
  imports: [
    BrowserModule,
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
