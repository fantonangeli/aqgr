import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class FtypesService {
    private cache$: Array<Observable<any>>=Array();

    constructor(private http: HttpClient, private logger: LoggerService) { }

    /**
     * getAll elements
     *
     * @param {string} taxonomy (optional) the taxonomy for filtering
     * @param {string} specie (optiona) the specie for filtering
     * @returns {Observable}
     */
    getAll(taxonomy:string="", specie:string="") {
        /* TODO: add the country param */
        let params={}, cacheid;

        this.logger.service("ftype:getAll", {taxonomy, specie});

        if(taxonomy) params[environment.services.ftypes.params.taxonomy]=taxonomy;
        if(specie) params[environment.services.ftypes.params.specie]=specie;
        params[environment.services.ftypes.params.limit]=environment.services.ftypes.limit;

        cacheid=JSON.stringify(params);

        if (!this.cache$[cacheid]) {
            this.cache$[cacheid] = this.http.get(environment.services.ftypes.all, {params}).pipe(
                shareReplay()
            );
        }

        return this.cache$[cacheid];
    }




}
