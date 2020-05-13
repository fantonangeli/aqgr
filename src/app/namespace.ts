/**
 * SearchServiceParams class to define the search params to pass to the service for querying
 */
export class SearchServiceParams {
    /**
     * the name to search by name
     * @type {string}
     */
    name: string = "";

    /**
     * the country code parent
     * @type {string}
     */
    ccode: string = "";

    /**
     * the taxonomy parent
     * @type {string}
     */
    taxonomy: string = "";

    /**
     * the specie parent
     * @type {string}
     */
    specie: string = "";

    /**
     * the ftype parent
     * @type {string}
     */
    ftype: string = "";

    /**
     * the sftype parent
     * @type {string}
     */
    sftype: string = "";
    
    /**
     * the limit for max elements
     * @type {number}
     */
    limit: number = 10;
}
