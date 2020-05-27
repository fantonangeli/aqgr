import { Component, Input, OnChanges } from '@angular/core';
import { Filter} from '../../../components/search/namespace';
import {SearchServiceParams} from '../../../namespace';
import {LoggerService} from '../../../services/logger.service';
import {UtilsService} from '../../../services/utils.service'

export class BaseChart01Component {
    series=[];
    @Input() filterValues:Filter[]=[];


  constructor(protected _service, protected _utilsService:UtilsService, protected _logger:LoggerService) { }

    /**
     * initialize the data. Intended to be overridden in special cases
     *
     * @param {any[]} data=[] the data from the service
     * @returns {object[]} the series in highchart format
     */
    initData(data:any[]=[]):object[]{
        return data;
    }



    /**
     * fetch the data and load them
     * @param {SearchServiceParams} params the params to send to the service
     *
     */
    fetchData(params:SearchServiceParams=new SearchServiceParams()) {
        this._service.getAll(params).subscribe(
            (data)=>{
                this.series=this.initData(data);
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
