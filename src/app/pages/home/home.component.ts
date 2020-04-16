import { Component, OnInit } from '@angular/core';
import { DynamicHTMLModule, DynamicHTMLComponent } from '../../core/components/dynamic-html';
import {FishStatCultSpecCountriesService} from '../../services/fish-stat-cult-spec-countries.service';
import {FiltersComponent} from '../../components/home/filters/filters.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    fishdata=[];
    fishTableData=[];
    selectedSpecies=[];
    private _fishstatService;


    constructor(data: FishStatCultSpecCountriesService){
        this._fishstatService=data;

        this.fetchStats();

    }

    ngOnInit(): void {}



    /**
     * load data for the table and set it to fishTableData
     *
     * @param {Object[]} data the data from the service
     */
    loadTableData(data){
        if(!data || !data.Continents) return;

        data=data.Continents;


        return data.sort((a, b) => (a.Name > b.Name) ? 1 : -1).map(e=>[
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
     * @param {string} asfisCodes the asfis codes as a list. Eg. "MSM,IPG"
     *
     */
    fetchStatsBySpecies(asfisCodes:string="") {
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



}
