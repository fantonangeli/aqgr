import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class TaxonomiesService {
    constructor(private http: HttpClient, private logger: LoggerService) { }


    private getAll() : Observable<Object> {

            this.logger.service("Taxonomies");

        return this.http.get(`${environment.services.taxonomies.all}`);
    }


}
