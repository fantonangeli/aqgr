import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { LoggerService } from 'aqgr-lib';
import {SearchServiceParams} from '../../namespace';
import {UtilsService} from '../utils.service';
import { BaseService } from 'aqgr-lib';
import { AggregationItem} from '../../components/search/namespace';

@Injectable({
  providedIn: 'root'
})
export class GlobalInfoService extends BaseService{
    constructor(http: HttpClient, logger: LoggerService, utilsService:UtilsService) {
        super(http, environment.services.params);
    }

    /**
     * get all data or filtered from the server
     *
     */
    getData():Observable<any>{
        return this._getAll(
            "GlobalInfoService",
            environment.services.home.globalInfo
        );
    }




}
