import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import {Deprecated} from './decorators';

@Injectable({
  providedIn: 'root'
})
@Deprecated "CountrySFTypeService";
export class CountrySFTypeService {

    constructor(private http: HttpClient) { }


    private getAll() : Observable<Object> {
        return this.http.get(`${environment.services.country.sFtype}`);
    }


}
