import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import {FishStatCultSpecCountriesService} from '../../services/fish-stat-cult-spec-countries.service';
import { Filter} from '../search/namespace';

@Component({
    selector: 'app-fish-stat-table',
    templateUrl: './fish-stat-table.component.html',
    styleUrls: ['./fish-stat-table.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class FishStatTableComponent implements OnInit, OnChanges {
    fishdata=[];
    fishTableData=[];
    private _fishstatService;
    data=[];
    disableTonnes=false;
    @Input() filterValues: Filter[]=[];



    constructor(data: FishStatCultSpecCountriesService){
        this._fishstatService=data;

        // this.fetchStats();

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
     * fetch the countries and load them in this._fishstatService
     * @param {string} ftype  the ftype
     *
     */
    fetchStatsByFtype(ftype:string="") {
        if(!ftype) return;

        this._fishstatService.getByFtype(ftype).subscribe(
            (data)=>{
                this.fishdata=data;
                this.fishTableData=this.loadTableData(data);
            },
            (error)=>{
                console.log("Network error: ", error);
            }
        );

    }

    /**
     * fetch the countries and load them in this._fishstatService
     * @param {string} asfisCodes the asfis codes as a list. Eg. "MSM,IPG"
     *
     */
    fetchStatsBySpecie(asfisCodes:string="") {
        if(!asfisCodes) return;

        this._fishstatService.getBySpecies(asfisCodes).subscribe(
            (data)=>{
                this.fishdata=data;
                this.fishTableData=this.loadTableData(data);
            },
            (error)=>{
                console.log("Network error: ", error);
            }
        );

    }
    
    /**
     * fetch the countries and load them in this._fishstatService
     *
     */
    fetchStats() {
        this._fishstatService.getAll().subscribe(
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
        if (!this.filterValues.length) {
            this.fetchStats();
        }
        else if(this.filterValues[0].key==="ftypes") {
            this.fetchStatsByFtype(this.filterValues[0].value);
        } else if(this.filterValues[0].key==="species") {
            this.fetchStatsBySpecie(this.filterValues[0].value);
        }

        this.disableTonnes=(!!this.filterValues.filter(e=>e.key==="ftypes").length);

    }

    ngOnInit() {
    }

}
