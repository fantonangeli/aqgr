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
    getByName(name:string) {
        let cacheid="byname";
        if (!this.cache$[cacheid]) {
            this.cache$[cacheid] = this.http.get(`${environment.services.species.byname}`+name).pipe(
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
            this.cache$[cacheid] = this.http.get(`${environment.services.species.all}`).pipe(
                shareReplay()
            );
        }

        return this.cache$[cacheid];
    }






}
