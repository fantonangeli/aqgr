import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountryFTypeService {
    constructor(private http: HttpClient) { }


    private getAll(ccode:string) : Observable<Object> {
        return this.http.get(`${environment.services.country.ftype+ccode}`);
    }


}
