import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class SFtypesService {
    private cache$: Array<Observable<any>>=Array();

    constructor(private http: HttpClient, private logger: LoggerService) { }


    /**
     * getAll elements
     *
     * @param {string} taxonomy (optional) the taxonomy for filtering
     * @param {string} specie (optiona) the specie for filtering
     * @param {string} ftype (optional) the ftype for filtering
     * @returns {Observable}
     */
    getAll(taxonomy:string="", specie:string="", ftype:string="") {
        let params={}, cacheid;

        this.logger.service("sftype:getAll", {taxonomy, specie, ftype});

        if(taxonomy) params[environment.services.sftypes.params.taxonomy]=taxonomy;
        if(specie) params[environment.services.sftypes.params.specie]=specie;
        if(ftype) params[environment.services.sftypes.params.ftype]=ftype;
        params[environment.services.sftypes.params.limit]=environment.services.sftypes.limit;

        cacheid=JSON.stringify(params);

        if (!this.cache$[cacheid]) {
            this.cache$[cacheid] = this.http.get(environment.services.sftypes.all, {params}).pipe(
                shareReplay()
            );
        }

        return this.cache$[cacheid];
    }



}
