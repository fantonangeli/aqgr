import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import {FishStatCultSpecCountriesService} from '../../../services/home/fish-stat-cult-spec-countries.service';
import { Filter} from '../../search/namespace';
import {UtilsService} from '../../../services/utils.service'
import {SearchServiceParams} from '../../../namespace';
import { LoggerService } from 'aqgr-lib';
import { environment } from '../../../../environments/environment';
import { faChartPie } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-fish-stat-table',
    templateUrl: './fish-stat-table.component.html',
    styleUrls: ['./fish-stat-table.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class FishStatTableComponent implements OnChanges {
    data=[];
    totalData={};
    disableTonnes=false;
    @Input() filterValues: Filter[]=[];
    lastTimeseriesYear=environment.lastTimeseriesYear;
    faChartPie = faChartPie;


    constructor(private _fishstatService: FishStatCultSpecCountriesService, private _utilsService:UtilsService, private _logger:LoggerService){
    }


    /**
     * load data for the table and set it to tableData
     *
     * @param {Object[]} data the data from the service
     */
    loadTableData(data){
        let newdata;

        if(!data || !data.continents) return;

        newdata=JSON.parse(JSON.stringify(data.continents));

        return newdata.map(e=>({
            ...e,
            "_children": e.regions.map(r=>({
                ...r,
                "_children":r.countries
            }))
        }));
    }

    /**
     * fetch the sftype and load them 
     * @param {SearchServiceParams} params the params to send to the service
     *
     */
    fetchStats(params:SearchServiceParams=new SearchServiceParams()) {
        this._fishstatService.getAll(params).subscribe(
            (data)=>{
                this.data=this.loadTableData(data);
                this.totalData=data.total;
            },
            (error)=>{
                this._logger.error("Network error: ", error);
            }
        );

    }


    ngOnChanges() {
        this.fetchStats(this._utilsService.getSearchServiceParamsFromFilterValues(this.filterValues));

        this.disableTonnes=(!!this.filterValues.filter(e=>e.key==="ftypes").length) || (!!this.filterValues.filter(e=>e.key==="sftypes").length);

    }


}
