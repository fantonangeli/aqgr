import { Component, OnInit } from '@angular/core';
import { Filter, ResultSearchEvent} from '../../components/search/namespace';
import {UtilsService} from '../../services/utils.service';
import {SpeciesService} from '../../services/species.service';
import {SearchServiceParams, ChartDataFormat} from '../../namespace';
import { Observable } from 'rxjs';
import { AggregationItem} from '../../components/search/namespace';

@Component({
  selector: 'app-specie-selection',
  templateUrl: './specie-selection.component.html',
  styleUrls: ['./specie-selection.component.scss']
})
export class SpecieSelectionComponent implements OnInit {
    filterValues: Filter[]=[];
    selectedSpecie="";
    species$: Observable<AggregationItem[]>;

    constructor(private _utilsService:UtilsService, private _service:SpeciesService){}


  ngOnInit() {
    this.species$ = this.fetchData();
  }

    /**
     * fetch the data and load them
     * @param {SearchServiceParams} params the params to send to the service
     *
     */
    fetchData(params:SearchServiceParams=new SearchServiceParams()) {
        return this._service.getAll(params);
        // .subscribe(
        //     (data)=>{
        //         this.series=this.initData(data);
        //     },
        //     (error)=>{
        //         this._logger.error("Network error: ", error);
        //     }
        // );

    }

}
