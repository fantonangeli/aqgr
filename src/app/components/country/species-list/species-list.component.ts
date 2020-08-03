import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import { CountryGroupsSpeciesService } from '../../../services/country/country-groups-species.service';
import { Filter} from '../../search/namespace';
import {UtilsService} from '../../../services/utils.service'
import {SearchServiceParams} from '../../../namespace';
import { LoggerService } from 'aqgr-lib';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-species-list',
  templateUrl: './species-list.component.html',
  styleUrls: ['./species-list.component.scss']
})
export class SpeciesListComponent implements OnChanges {
    @Input() filterValues: Filter[]=[];
    totalProduction:string;
    speciesData:object[]=[];
    @Output() onTaxonomyClickEvent: EventEmitter<string> = new EventEmitter<string>();


    constructor(private _service: CountryGroupsSpeciesService, private _utilsService:UtilsService, private _logger:LoggerService){
    }


    /**
     * fetch the sftype and load them 
     * @param {SearchServiceParams} params the params to send to the service
     *
     */
    fetchStats(params:SearchServiceParams=new SearchServiceParams()) {
        this._service.getAll(params).subscribe(
            (data)=>{
                if(!data) return;

                this.totalProduction=Number(data.slice(-1)[0].timeseries[environment.lastTimeseriesYear]).toLocaleString('en-US');
            

                this.speciesData=data.slice(0,-1);

            },
            (error)=>{
                this._logger.error("Network error: ", error);
            }
        );

    }


    ngOnChanges() {
        this.fetchStats(this._utilsService.getSearchServiceParamsFromFilterValues(this.filterValues));
    }

}
