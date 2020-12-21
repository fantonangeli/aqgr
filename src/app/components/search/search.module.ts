import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterTermsComponent } from './filter-terms/filter-terms.component';
import { LetterSearchComponent } from './letter-search/letter-search.component';
import { ResultListComponent } from './result-list/result-list.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchPillComponent } from './search-pill/search-pill.component';
import { ResultsDirective } from './results.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap/pagination';

import { environment } from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

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
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })
  ],
  exports: [FilterTermsComponent,
    LetterSearchComponent,
    ResultListComponent,
    SearchBarComponent,
    SearchPillComponent,
    ResultsDirective]
})
export class SearchModule { }

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, environment.paths.i18n+"/", ".json");
}
