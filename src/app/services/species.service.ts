import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {
    private cache$: Array<Observable<any>>=Array();

    constructor(private http: HttpClient, private logger: LoggerService) { }


    /**
     * get by name
     * @returns {Observable}
     */
    getAll(name:string="", taxonomy:string="") {
        let params={}, cacheid;

        this.logger.service("Species:getAll", {name, taxonomy});

        if(name) params[environment.services.species.params.search]=name;
        if(taxonomy) params[environment.services.species.params.taxonomy]=taxonomy;
        params[environment.services.species.params.limit]=environment.services.species.limit;

        cacheid=JSON.stringify(params);

        if (!this.cache$[cacheid]) {
            this.cache$[cacheid] = this.http.get(environment.services.species.all, {params}).pipe(
                shareReplay()
            );
        }

        return this.cache$[cacheid];
    }





}
