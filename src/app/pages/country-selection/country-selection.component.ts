import { Component, OnInit } from "@angular/core";
import { Filter, ResultSearchEvent } from "../../components/search/namespace";
import { UtilsService } from "../../services/utils.service";
import { CountriesService } from "../../services/countries.service";
import { SearchServiceParams, ChartDataFormat } from "../../namespace";
import { concat, Observable, of, Subject } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { AggregationItem } from "../../components/search/namespace";
import {Router} from "@angular/router";


@Component({
  selector: "app-country-selection",
  templateUrl: "./country-selection.component.html",
  styleUrls: ["./country-selection.component.scss"],
})
export class CountrySelectionComponent implements OnInit {
    selectedCountry = "";
    country$: Observable<any>;
    countryLoading = false;
    countryInput$ = new Subject<string>();

    constructor( private _utilsService: UtilsService, private _countriesService: CountriesService, private _router:Router) {}



    ngOnInit() {
        let ssp=new SearchServiceParams();
        ssp.limit=1000;
        this.country$=this._countriesService.getAll(ssp);
    }

    /**
     * on change event of country ng-select
     *
     * @param $event
     */
    onChangeCountry($event) {
      this._router.navigate(['/country/', $event.iso3 ]);
    }
}
