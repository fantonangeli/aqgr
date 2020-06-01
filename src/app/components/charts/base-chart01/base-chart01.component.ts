import { Component, Input, OnChanges } from '@angular/core';
import { Filter } from '../../../components/search/namespace';
import {SearchServiceParams, ChartDataFormat} from '../../../namespace';
import {LoggerService} from '../../../services/logger.service';
import {UtilsService} from '../../../services/utils.service'

export class BaseChart01Component {
    series=[];
    @Input() filterValues:Filter[]=[];

    /* TODO: species names in italic for charts with species */

    /**
     * server's data format. Default highcharts
     */
    protected dataFormat:ChartDataFormat=ChartDataFormat.highcharts;


  constructor(protected _service, protected _utilsService:UtilsService, protected _logger:LoggerService) { }

    private _initKeyValSerie(el):object{
        if(!el) return null;

        return {
                "name":el.key,
                "data":el.values.map(e=>({"name": e.key, "y":e.value}))
            };
    }

    /**
     * initialize the data for the stackedKeyval format
     *
     * @param {any[]} data=[] the data from the service
     * @returns {object[]} the series in highchart format
     */
    initDataStackedKeyVal(data:any[]=[]):object[]{
        let r=[];

        for (var i = 0, len = data.length, el; i < len && (el=data[i]); i++) {
            r.push(this._initKeyValSerie(el));
        }
        
        return r;
    }

    /**
     * initialize the data for the keyval format
     *
     * @param {any[]} data=[] the data from the service
     * @returns {object[]} the series in highchart format
     */
    initDataKeyVal(data:any[]=[]):object[]{
        return [this._initKeyValSerie({"name":"serie", "values":data})];
    }

    /**
     * initialize the data. Intended to be overridden in special cases
     *
     * @param {any[]} data=[] the data from the service
     * @returns {object[]} the series in highchart format
     */
    initData(data:any[]=[]):object[]{
        if(this.dataFormat===ChartDataFormat.keyval) return this.initDataKeyVal(data);
        
        if(this.dataFormat===ChartDataFormat.stackedKeyval) return this.initDataStackedKeyVal(data);
        
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
