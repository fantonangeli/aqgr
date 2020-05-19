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
     * @param {object} params the params to send to the service
     * @param {number} limit (optional) the limit
     * @returns {Observable}
     */
    protected _getByParams(serviceName:string, url:string, params:any={}, limit:number=0):Observable<any> {
        let cacheid;

        this.logger.service(serviceName+":getAll", params);

        if(limit>0) params[environment.services.params.limit]=limit;

        cacheid=JSON.stringify(params);

        if (!this.cache$[cacheid]) {
            this.cache$[cacheid] = this.http.get(url, {params}).pipe(
                shareReplay()
            );
        }

        return this.cache$[cacheid];
    }

    /**
     * get all elements or send the service search params
     *
     * @param {string} serviceName the name of the service
     * @param {string} url the rest url
     * @param {SearchServiceParams} params the params to send to the service
     * @param {number} limit (optional) the limit
     * @returns {Observable}
     */
    protected _getAll(serviceName:string, url:string, ssp:SearchServiceParams=new SearchServiceParams(), limit:number=0):Observable<any> {
        let params={}, cacheid;

        params=this.utilsService.getRestParams(ssp);

        return this._getByParams(serviceName,url,params,limit);
    }



}
