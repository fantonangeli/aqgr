import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { LoggerService } from 'aqgr-lib';
import {SearchServiceParams} from '../../namespace';
import {UtilsService} from '../utils.service';
import { BaseService } from 'aqgr-lib';

@Injectable({
  providedIn: 'root'
})
export class CommonChart13Service extends BaseService{
    constructor(http: HttpClient, logger: LoggerService, utilsService:UtilsService) {
        super(http, environment.services.params);
    }

    /**
     * get all data or filtered from the server
     *
     * @param {SearchServiceParams} params the params to send to the service
     * @returns {Observable<Object[]>}
     */
    getAll(ssp:SearchServiceParams):Observable<Object[]>{
        return this._getAll(
            "Common13Service",
            environment.services.common.chart13, 
            ssp
        );
    }




}
