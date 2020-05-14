import { Component, OnChanges, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import {CountryDevSpeciesService} from '../../../services/country-dev-species.service';
import {StackedBars01Component} from '../stacked-bars01/stacked-bars01.component';
import { Filter} from '../../../components/search/namespace';
import {UtilsService} from '../../../services/utils.service'
import {SearchServiceParams} from '../../../namespace';

@Component({
  selector: 'app-country-chart02',
  templateUrl: './country-chart02.component.html',
  styleUrls: ['./country-chart02.component.scss']
})
export class CountryChart02Component implements OnChanges {
    series=[];
    @Input() filterValues:Filter[]=[];

  constructor(private _service:CountryDevSpeciesService, private _utilsService:UtilsService) { }


    /**
     * fetch the data and load them
     *
     */
    fetchData(params:SearchServiceParams=new SearchServiceParams()) {
        this._service.getAll(params).subscribe(
            (data)=>{
                this.series=data;
            },
            (error)=>{
                console.log("Network error: ", error);
            }
        );

    }

    ngOnChanges(){
        this.fetchData(this._utilsService.getSearchServiceParamsFromFilterValues(this.filterValues));
    }

}
