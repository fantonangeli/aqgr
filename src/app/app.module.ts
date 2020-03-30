import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FaoDatatableComponent } from './components/fao-datatable/fao-datatable.component';
import { FishStatTableComponent } from './components/fish-stat-table/fish-stat-table.component';

@NgModule({
  declarations: [
    AppComponent,
    FaoDatatableComponent,
    FishStatTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
