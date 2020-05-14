import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import {FishStatCultSpecCountriesService} from '../../services/fish-stat-cult-spec-countries.service';
import { Filter} from '../search/namespace';
import {UtilsService} from '../../services/utils.service'
import {SearchServiceParams} from '../../namespace';

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



    constructor(private _fishstatService: FishStatCultSpecCountriesService, private _utilsService:UtilsService){
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
            Number(e.Timeseries["2017"]).toLocaleString('en-US'),
            Number(e.Species).toLocaleString('en-US'),
            Number(e.FTypes).toLocaleString('en-US'),
            Number(e.SFTypes).toLocaleString('en-US'),
            e.Regions=e.Regions.sort((a, b) => (a.Name > b.Name) ? 1 : -1).map(r=>[
                r.Name,
                Number(r.Timeseries["2017"]).toLocaleString('en-US'),
                Number(r.Species).toLocaleString('en-US'),
                Number(r.FTypes).toLocaleString('en-US'),
                Number(r.SFTypes).toLocaleString('en-US'),
                r.Countries=r.Countries.sort((a, b) => (a.Name > b.Name) ? 1 : -1).map(c=>[
                    c.Name,
                    Number(c.Timeseries["2017"]).toLocaleString('en-US'),
                    Number(c.Species).toLocaleString('en-US'),
                    Number(c.FTypes).toLocaleString('en-US'),
                    Number(c.SFTypes).toLocaleString('en-US'),
                ])

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
                console.log("Network error: ", error);
            }
        );

    }


    ngOnChanges() {
        this.fetchStats(this._utilsService.getSearchServiceParamsFromFilterValues(this.filterValues));

        this.disableTonnes=(!!this.filterValues.filter(e=>e.key==="ftypes").length) || (!!this.filterValues.filter(e=>e.key==="sftypes").length);

    }


}
