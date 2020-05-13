import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { LoggerService } from './logger.service';
import {SearchServiceParams} from '../namespace';
import {UtilsService} from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class FtypesService {
    private cache$: Array<Observable<any>>=Array();

    constructor(private http: HttpClient, private logger: LoggerService, private utilsService:UtilsService) { }

    /**
     * getAll elements
     *
     * @param {SearchServiceParams} params the params to send to the service
     * @returns {Observable}
     */
    getAll(ssp:SearchServiceParams=new SearchServiceParams()) {
        let params={}, cacheid;

        this.logger.service("ftype:getAll", ssp);

        ssp.limit=environment.services.ftypes.limit;

        params=this.utilsService.getRestParams(ssp);
        cacheid=JSON.stringify(params);

        if (!this.cache$[cacheid]) {
            this.cache$[cacheid] = this.http.get(environment.services.ftypes.all, {params}).pipe(
                shareReplay()
            );
        }

        return this.cache$[cacheid];
    }




}
