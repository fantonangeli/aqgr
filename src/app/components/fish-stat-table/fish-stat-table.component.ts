import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import {FishStatCultSpecCountriesService} from '../../services/countries/fish-stat-cult-spec-countries.service';
import { Filter} from '../search/namespace';
import {UtilsService} from '../../services/utils.service'
import {SearchServiceParams} from '../../namespace';
import {LoggerService} from '../../services/logger.service';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-fish-stat-table',
    templateUrl: './fish-stat-table.component.html',
    styleUrls: ['./fish-stat-table.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class FishStatTableComponent implements OnChanges {
    fishdata:Object={};
    fishTableData=[];
    data=[];
    disableTonnes=false;
    @Input() filterValues: Filter[]=[];
    lastTimeseriesYear=environment.lastTimeseriesYear;


    constructor(private _fishstatService: FishStatCultSpecCountriesService, private _utilsService:UtilsService, private _logger:LoggerService){
    }

    /**
     * load data for the table and set it to fishTableData
     *
     * @param {Object[]} data the data from the service
     */
    loadTableData(data){
        let newdata;

        if(!data || !data.Continents) return;

        newdata=JSON.parse(JSON.stringify(data.Continents));

        return newdata.sort((a, b) => (a.Name > b.Name) ? 1 : -1).map(e=>[
            e.Name,
            Number(e.Timeseries[this.lastTimeseriesYear]).toLocaleString('en-US'),
            e.Species,
            e.FTypes,
            e.SFTypes,
            e.Regions.sort((a, b) => (a.Name > b.Name) ? 1 : -1).map(r=>[
                r.Name,
                Number(e.Timeseries[this.lastTimeseriesYear]).toLocaleString('en-US'),
                r.Species,
                r.FTypes,
                r.SFTypes,
                r.Countries.sort((a, b) => (a.Name > b.Name) ? 1 : -1).map(c=>{
                    let rv=[
                        c.Name,
                        Number(e.Timeseries[this.lastTimeseriesYear]).toLocaleString('en-US'),
                        c.Species,
                        c.FTypes,
                        c.SFTypes,
                    ];
                    rv["Ccode"]=c.Ccode;
                    return rv;
                })

            ])
        ]);
    }

    /**
     * fetch the sftype and load them 
     * @param {SearchServiceParams} params the params to send to the service
     *
     */
    fetchStats(params:SearchServiceParams=new SearchServiceParams()) {
        this._fishstatService.getAll(params).subscribe(
            (data)=>{
                this.fishdata=data;
                this.fishTableData=this.loadTableData(data);
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
