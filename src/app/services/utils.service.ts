import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {SearchServiceParams} from '../namespace';
import { Filter} from '../components/search/namespace';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
      constructor() { }


        public getSearchServiceParamsFromFilterValues(filterValues: Filter[]=[]):SearchServiceParams{
            let params=new SearchServiceParams();


            for (var i = 0, len = filterValues.length, e=null; i < len && (e=filterValues[i]) ; i++) {
                if (e.key==="countries") {
                    params.ccode=e.value;
                } else if (e.key==="taxonomies"){
                    params.taxonomy=e.value;
                }else if (e.key==="species"){
                    params.specie=e.value;
                }else if (e.key==="ftypes"){
                    params.ftype=e.value;
                }else if (e.key==="sftypes"){
                    params.sftype=e.value;
                }
            }
            return params;
        }


      /**
       * get the REST params for the server
       *
       * @param {SearchServiceParams} params the params to send to the service
       * @returns {Object}
       */
      public getRestParams(ssp:SearchServiceParams=new SearchServiceParams()):Object{
          let params={};

          if(ssp.name) params[environment.services.params.search]=ssp.name;
          if(ssp.ccode) params[environment.services.params.ccode]=ssp.ccode;
          if(ssp.taxonomy) params[environment.services.params.taxonomy]=ssp.taxonomy;
          if(ssp.specie) params[environment.services.params.specie]=ssp.specie;
          if(ssp.ftype) params[environment.services.params.ftype]=ssp.ftype;
          if(ssp.sftype) params[environment.services.params.ftype]=ssp.ftype;
          if(ssp.limit) params[environment.services.params.limit]=ssp.limit;

          return params;
      }
}
