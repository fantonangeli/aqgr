import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterTermsComponent } from './filter-terms/filter-terms.component';
import { LetterSearchComponent } from './letter-search/letter-search.component';
import { ResultListComponent } from './result-list/result-list.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchPillComponent } from './search-pill/search-pill.component';
import { ResultsDirective } from './results.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap';


@NgModule({
  declarations: [
    FilterTermsComponent,
    LetterSearchComponent,
    ResultListComponent,
    SearchBarComponent,
    SearchPillComponent,
    ResultsDirective
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    PaginationModule.forRoot(),
  ],
  exports: [FilterTermsComponent,
    LetterSearchComponent,
    ResultListComponent,
    SearchBarComponent,
    SearchPillComponent,
    ResultsDirective]
})
export class SearchModule { }
