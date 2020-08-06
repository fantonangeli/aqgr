import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { LoggerService } from 'aqgr-lib';
import {SearchServiceParams} from '../namespace';
import {UtilsService} from './utils.service';
import { BaseService } from 'aqgr-lib';
import { AggregationItem} from '../components/search/namespace';

@Injectable({
  providedIn: 'root'
})
export class CountriesService extends BaseService{
    constructor(http: HttpClient, logger: LoggerService, utilsService:UtilsService) {
        super(http, environment.services.params);
    }

    /**
     * get all data or filtered from the server
     *
     * @param {SearchServiceParams} params the params to send to the service
     */
    getAll(ssp:SearchServiceParams):Observable<AggregationItem[]>{
        let {name, continent, region, country, taxonomy, specie, ftype, sftype} = ssp;

        return this._getAll(
            "CountriesService",
            environment.services.countries.all, 
            <SearchServiceParams>{name, continent, region},
            environment.services.countries.limit
        );
    }




}
