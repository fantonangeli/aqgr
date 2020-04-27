import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountriesSFtypeService {
    private cache$: Array<Observable<Object>>=Array();

    constructor(private http: HttpClient) { }

    /**
     * get all elements by ftype
     * @returns {Observable}
     */
    getByFype(ftype) {
        let cacheid="ftype:"+ftype;
        if (!this.cache$[cacheid]) {
            this.cache$[cacheid] = this.http.get(environment.services.countries.sFtypeBySpecies+ftype).pipe(
                shareReplay()
            );
        }

        return this.cache$[cacheid];
    }

    /**
     * get all elements
     * @returns {Observable}
     */
    getAll() {
        let cacheid="all";
        if (!this.cache$[cacheid]) {
            this.cache$[cacheid] = this.http.get(environment.services.countries.sFtype).pipe(
                shareReplay()
            );
        }

        return this.cache$[cacheid];
    }



}
