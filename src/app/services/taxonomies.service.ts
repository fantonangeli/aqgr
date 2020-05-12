import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class TaxonomiesService {
    private cache$: Array<Observable<any>>=Array();

    constructor(private http: HttpClient, private logger: LoggerService) { }

    getAll() {
        /* TODO: add the country param */
        let params={}, cacheid;

        this.logger.service("Taxonomies:getAll");

        params[environment.services.taxonomies.params.limit]=environment.services.taxonomies.limit;

        cacheid=JSON.stringify(params);

        if (!this.cache$[cacheid]) {
            this.cache$[cacheid] = this.http.get(environment.services.taxonomies.all, {params}).pipe(
                shareReplay()
            );
        }

        return this.cache$[cacheid];
    }



}
