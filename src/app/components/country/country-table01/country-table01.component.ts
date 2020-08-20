import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import { CountryGroupsSpeciesService } from '../../../services/country/country-groups-species.service';
import { Filter} from '../../search/namespace';
import {UtilsService} from '../../../services/utils.service';
import {SearchServiceParams} from '../../../namespace';
import { LoggerService } from 'aqgr-lib';
import { environment } from '../../../../environments/environment';
import { faChartPie } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-country-table01',
  templateUrl: './country-table01.component.html',
  styleUrls: ['./country-table01.component.scss'],
  encapsulation: ViewEncapsulation.None 
})
export class CountryTable01Component implements OnChanges {
    @Input() filterValues: Filter[]=[];
    data:object[]=[];
    lastTimeseriesYear=environment.lastTimeseriesYear;
    faChartPie = faChartPie;

    constructor(private _service: CountryGroupsSpeciesService, private _utilsService:UtilsService, private _logger:LoggerService){
    }

    /**
     * load data for the table and set it to tableData
     *
     * @param {Object[]} data the data from the service
     */
    loadTableData(data){
        let newdata;

        if(!data || !data.taxonomies) return;

        newdata=JSON.parse(JSON.stringify(data.taxonomies));

        return newdata.map(e=>({
            ...e,
            "_children": e.species
        }));
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

                this.data=this.loadTableData(data);

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
