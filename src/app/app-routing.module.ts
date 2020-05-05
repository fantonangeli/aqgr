import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountryComponent } from './pages/country/country.component';
import { HomeComponent } from './pages/home/home.component';
import { ConservationAndSustainableUseComponent } from './pages/conservation-and-sustainable-use/conservation-and-sustainable-use.component'


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'country/:ccode', component: CountryComponent },
  { path: 'use', component: ConservationAndSustainableUseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
