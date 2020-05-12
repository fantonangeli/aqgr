import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FishStatCultSpecCountriesService {
    private cache$: Array<Observable<Object>>=Array();

    constructor(private http: HttpClient) { }


    /**
     * gets the data by ftype
     *
     * @param {string} ftype the asfis codes as a list. Eg. "MSM,IPG"
     * @returns {Observable}
     */
    private getByFtype(ftype:string) : Observable<Object> {
        let cacheid="byFtype";
        
        if(ftype==="") throw Error("ftype not defined");

        if (!this.cache$[cacheid]) {
            this.cache$[cacheid] = this.http.get(environment.services.fishStatCultSpecCountries.byFtype+ftype).pipe(
                shareReplay()
            );
        }

        return this.cache$[cacheid];
    }


    /**
     * gets the data by species
     *
     * @param {string} asfisCodes the asfis codes as a list. Eg. "MSM,IPG"
     * @returns {Observable}
     */
    getBySpecies(asfisCodes:string) : Observable<Object> {
        let cacheid="bySpecies";

        if(asfisCodes==="") throw Error("asfisCodes not defined");

        if (!this.cache$[cacheid]) {
            this.cache$[cacheid] = this.http.get(environment.services.fishStatCultSpecCountries.bySpecies+asfisCodes).pipe(
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
        /* TODO: add the country param */
        let cacheid="all";
        if (!this.cache$[cacheid]) {
            this.cache$[cacheid] = this.http.get(environment.services.fishStatCultSpecCountries.all).pipe(
                shareReplay()
            );
        }

        return this.cache$[cacheid];
    }






}
