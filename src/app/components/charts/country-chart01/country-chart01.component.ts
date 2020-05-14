import { Component, OnChanges, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import {CountryFTypeService} from '../../../services/country-ftype.service';
import {StackedBars01Component} from '../stacked-bars01/stacked-bars01.component';
import { Filter} from '../../../components/search/namespace';
import {UtilsService} from '../../../services/utils.service'
import {SearchServiceParams} from '../../../namespace';
import {LoggerService} from '../../../services/logger.service';

@Component({
  selector: 'app-country-chart01',
  templateUrl: './country-chart01.component.html',
  styleUrls: ['./country-chart01.component.scss']
})
export class CountryChart01Component implements OnChanges {
    series=[];
    @Input() filterValues:Filter[]=[];


  constructor(private _service:CountryFTypeService, private _utilsService:UtilsService, private _logger:LoggerService) {}


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
                this._logger.error("Network error: ", error);
            }
        );

    }

    ngOnChanges(){
        this.fetchData(this._utilsService.getSearchServiceParamsFromFilterValues(this.filterValues));
    }

}
