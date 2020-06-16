import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import { CountryGroupsSpeciesService } from '../../../services/country/country-groups-species.service';
import { Filter} from '../../search/namespace';
import {UtilsService} from '../../../services/utils.service'
import {SearchServiceParams} from '../../../namespace';
import {LoggerService} from '../../../services/logger.service';

@Component({
  selector: 'app-species-list',
  templateUrl: './species-list.component.html',
  styleUrls: ['./species-list.component.scss']
})
export class SpeciesListComponent implements OnChanges {
    @Input() filterValues: Filter[]=[];
    totalProd:number;


    constructor(private _service: CountryGroupsSpeciesService, private _utilsService:UtilsService, private _logger:LoggerService){
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
                r.Countries=r.Countries.sort((a, b) => (a.Name > b.Name) ? 1 : -1).map(c=>{
                    let rv=[
                        c.Name,
                        Number(c.Timeseries["2017"]).toLocaleString('en-US'),
                        Number(c.Species).toLocaleString('en-US'),
                        Number(c.FTypes).toLocaleString('en-US'),
                        Number(c.SFTypes).toLocaleString('en-US'),
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
        this._service.getAll(params).subscribe(
            (data)=>{
                if(!data) return;

                this.totalProd=data.slice(-1)[0].Production;

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
