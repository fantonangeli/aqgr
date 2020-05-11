import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class CountryInfoService {
    private cache$: Array<Observable<any>>=Array();

    constructor(private http: HttpClient, private logger: LoggerService) { }


    /**
     * get by countryCode
     * @params
     * @returns {Observable}
     */
    getData(ccode:string) {
        let cacheid;

        this.logger.service("CountryInfo:get", {ccode});

        cacheid=JSON.stringify(ccode);

        if (!this.cache$[cacheid]) {
            this.cache$[cacheid] = this.http.get(environment.services.country.info+ccode).pipe(
                shareReplay()
            );
        }

        return this.cache$[cacheid];
    }





}
