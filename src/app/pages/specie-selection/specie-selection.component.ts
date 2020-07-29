import { Component, OnInit } from "@angular/core";
import { Filter, ResultSearchEvent } from "../../components/search/namespace";
import { UtilsService } from "../../services/utils.service";
import { SpeciesService } from "../../services/species.service";
import { TaxonomiesService } from "../../services/taxonomies.service";
import { SearchServiceParams, ChartDataFormat } from "../../namespace";
import { concat, Observable, of, Subject } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { AggregationItem } from "../../components/search/namespace";
import {Router} from "@angular/router";


@Component({
  selector: "app-specie-selection",
  templateUrl: "./specie-selection.component.html",
  styleUrls: ["./specie-selection.component.scss"],
})
export class SpecieSelectionComponent implements OnInit {
    selectedTaxonomy = "";
    taxonomy$: Observable<any>;
    taxonomyLoading = false;
    taxonomyInput$ = new Subject<string>();

    selectedSpecie = "";
    specie$: Observable<any>;
    specieLoading = false;
    specieInput$ = new Subject<string>();

    constructor( private _utilsService: UtilsService, private _taxonomiesService: TaxonomiesService, private _speciesService: SpeciesService, private _router:Router) {}



    ngOnInit() {
        this.taxonomy$=this._taxonomiesService.getAll();
        this.loadSpecies();
    }

    /**
     * load the species in the ng-select
     *
     * @param taxonomy (optional) the taxonomy
     * @return void
     */
    private loadSpecies(taxonomy:string="") {
        let ssp=new SearchServiceParams();
        ssp.taxonomy=taxonomy;

        this.specie$ = concat(
            this._speciesService.getAll(ssp),
            this.specieInput$.pipe(
                distinctUntilChanged(),
                tap(() => this.specieLoading = true),
                switchMap(term => {
                    let ssp=new SearchServiceParams();
                    ssp.taxonomy=taxonomy;
                    ssp.name=term;

                    return this._speciesService.getAll(ssp).pipe(
                        catchError(() => of([])), // empty list on error
                        tap(() => this.specieLoading = false)
                    );
                })
            )
        );
    }

    /**
     * on change event of taxonomy ng-select
     *
     * @param $event
     */
    onChangeTaxonomy($event) {
        this.loadSpecies($event.key);
    }

    /**
     * on change event of taxonomy ng-select
     *
     * @param $event
     */
    onChangeSpecie($event) {
      this._router.navigate(['/specie/', $event.alphaCode ]);
    }
}
