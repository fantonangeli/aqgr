import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FishStatCultSpecCountriesService {

    constructor(private http: HttpClient) { }



    /**
     * gets the data by species
     *
     * @param {string} asfisCodes the asfis codes as a list. Eg. "MSM,IPG"
     * @returns {Observable}
     */
    private getBySpecies(asfisCodes:string) : Observable<Object> {
        if(asfisCodes==="") throw Error("asfisCodes not defined");

        return this.http.get(environment.services.fishStatCultSpecCountries.bySpecies+asfisCodes);
    }


    /**
     * get all the data
     *
     * @returns {Observable}
     */
    private getAll() : Observable<Object> {
        return this.http.get(environment.services.fishStatCultSpecCountries.all);
    }


}
