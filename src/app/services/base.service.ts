import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { LoggerService } from './logger.service';
import {SearchServiceParams} from '../namespace';
import {UtilsService} from './utils.service';

export class BaseService {
    private cache$: Array<Observable<any>>=Array();

    constructor(private http: HttpClient, private logger: LoggerService, private utilsService:UtilsService) { }

    /**
     * get all elements or send the service search params
     *
     * @param {string} serviceName the name of the service
     * @param {string} url the rest url
     * @param {number} limit (optional) the limit
     * @param {SearchServiceParams} params the params to send to the service
     * @returns {Observable}
     */
    protected _getAll(serviceName:string, url:string, ssp:SearchServiceParams=new SearchServiceParams(), limit:number=0):Observable<any> {
        let params={}, cacheid;

        this.logger.service(serviceName+":getAll", ssp);

        if(limit>0) ssp.limit=limit;

        params=this.utilsService.getRestParams(ssp);
        cacheid=JSON.stringify(params);

        if (!this.cache$[cacheid]) {
            this.cache$[cacheid] = this.http.get(url, {params}).pipe(
                shareReplay()
            );
        }

        return this.cache$[cacheid];
    }



}
