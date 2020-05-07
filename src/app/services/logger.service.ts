import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
/**
 * class to manage the app's logging
 */
export class LoggerService {

    /**
     * log 4 services
     *
     * @param {string} servicename
     * @param {any} data
     */
    service(servicename: string, data:any="") {
        this.log("Service: "+ servicename, data, "red");
    }


    /**
     * just a logger
     *
     * @param {string} msg
     * @param {any} data
     * @param {string} color
     */
    log(msg: any, data:any, color:string="") {
        if(!environment.logging) return;

        console.log("%c"+msg, `color: ${color}; font-weight: bold;`, data);
    }

}
