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
     * log 4 errors
     *
     * @param {string} msg the message
     * @param {any} data debugging data
     */
    error(msg: string, data:any="") {
        this.log(msg, data, "red");
    }

    /**
     * log 4 services
     *
     * @param {string} servicename the name of the service
     * @param {any} params request params
     */
    service(servicename: string, params:any="") {
        this.log("Service: "+ servicename, params, "green");
    }


    /**
     * just a logger
     *
     * @param {string} msg message to show
     * @param {any} data the data 
     * @param {string} color pick your color
     */
    log(msg: any, data:any, color:string="") {
        if(!environment.logging) return;

        console.log("%c"+msg, `color: ${color}; font-weight: bold;`, data);
    }

}
