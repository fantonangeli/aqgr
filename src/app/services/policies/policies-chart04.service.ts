import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { LoggerService } from '../logger.service';
import {SearchServiceParams} from '../../namespace';
import {UtilsService} from '../utils.service';
import {BaseService} from '../base.service';
import { AggregationItem} from '../../components/search/namespace';

@Injectable({
  providedIn: 'root'
})
export class PoliciesChart04Service extends BaseService{
    constructor(http: HttpClient, logger: LoggerService, utilsService:UtilsService) {
        super(http, logger, utilsService);
    }

    /**
     * get all data or filtered from the server
     *
     * @param {SearchServiceParams} params the params to send to the service
     */
    getAll(ssp:SearchServiceParams):Observable<AggregationItem[]>{
        return this._getAll(
            "PoliciesChart04Service",
            environment.services.policies.chart04, 
            ssp
        );
    }




}
