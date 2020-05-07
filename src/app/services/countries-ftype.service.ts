import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class CountriesFtypeService {
    private cache$: Array<Observable<Object>>=Array();

    constructor(private http: HttpClient, private logger: LoggerService) { }

    /**
     * get all elements by specie
     * @returns {Observable}
     */
    getBySpecie(specie) {
        let cacheid="specie:"+specie;

        this.logger.service("Ftype", {specie});
        
        if (!this.cache$[cacheid]) {
            this.cache$[cacheid] = this.http.get(environment.services.countries.ftypeBySpecies+specie).pipe(
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

        this.logger.service("Ftype");

        let cacheid="all";
        if (!this.cache$[cacheid]) {
            this.cache$[cacheid] = this.http.get(environment.services.countries.ftype).pipe(
                shareReplay()
            );
        }

        return this.cache$[cacheid];
    }



}
