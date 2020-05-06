import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {
    private cache$: Array<Observable<Object>>=Array();

    constructor(private http: HttpClient) { }


    /**
     * get by name
     * @returns {Observable}
     */
    getAll(name:string="", taxonomy:string="") {
        let params={}, cacheid;


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
