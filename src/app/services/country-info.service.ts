import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { LoggerService } from './logger.service';
import {SearchServiceParams} from '../namespace';
import {UtilsService} from './utils.service';
import {BaseService} from './base.service';
import { AggregationItem} from '../components/search/namespace';

@Injectable({
  providedIn: 'root'
})
export class CountryInfoService extends BaseService{
    constructor(http: HttpClient, logger: LoggerService, utilsService:UtilsService) {
        super(http, logger, utilsService);
    }

    /**
     * get by countryCode
     * @params
     * @returns {Observable}
     */
    getData(ccode:string):Observable<any> {
        let ssp= new SearchServiceParams();

        ssp.ccode=ccode;

        return this._getAll(
            "CountryInfoService",
            environment.services.country.info, 
            ssp
        );
    }




}
