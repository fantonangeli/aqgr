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
     * get all elements
     * @returns {Observable}
     */
    getAll() {
        let cacheid="all";
        if (!this.cache$[cacheid]) {
            this.cache$[cacheid] = this.requestAll().pipe(
                shareReplay()
            );
        }

        return this.cache$[cacheid];
    }

    private requestAll() {
        return this.http.get(`${environment.services.species.all}`).pipe(
            map(response => response)
        );
    }


    // /**
    //  * download a note from the rest service
    //  * @param {number} category the category of the note
    //  * @param {string} lang the language
    //  * @returns {Observable} the Observable, false if error
    //  */
    // private requestNotes(category:number, lang:string) {
    //      if (typeof category === "undefined" || category === null) {
    //          throw "InvalidArgument";
    //                  
    //      }
    //
    //     if (!lang) {
    //          throw "InvalidArgument";
    //     }
    //     
    //
    //     return this.http.get(environment.notesServiceBaseUrl+category+"/"+lang+environment.notesServiceSuffix, {responseType: 'text'}).pipe(
    //         map(response => response)
    //     );
    // }
    //




}
