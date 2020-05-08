import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class SFtypesService {
    private cache$: Array<Observable<any>>=Array();

    constructor(private http: HttpClient, private logger: LoggerService) { }

    /**
     * get all elements by ftype
     * @returns {Observable}
     */
    getByFype(ftype) {
        let cacheid="ftype:"+ftype;

        this.logger.service("Sftype", {ftype});
        
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

        this.logger.service("Sftype");

        let cacheid="all";
        if (!this.cache$[cacheid]) {
            this.cache$[cacheid] = this.http.get(environment.services.countries.sFtype).pipe(
                shareReplay()
            );
        }

        return this.cache$[cacheid];
    }



}
