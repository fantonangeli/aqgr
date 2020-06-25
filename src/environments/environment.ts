// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const baseUrl="http://localhost:3000/";
const dataPath="assets/data/";
const commonPath=dataPath+"common/";

export const environment = {
    production: false,
    logging:true,

    services:{
        fishStatCultSpecCountries: {
            all:"assets/data/FishStatSpecCountries.json",
            bySpecies:"../assets/data/FishStatSpecCountries.ASFISCode-MSM.json?species=",
            byFtype:"../assets/data/FishStatSpecCountries.ASFISCode-MSM.json?species="
        },
        params: {
            continent:"continent_like", 
            region:"region_like", 
            country:"country_like", 
            taxonomy:"taxonomy_like", 
            specie:"specie_like", 
            ftype:"ftype_like", 
            sftype:"sftype_like", 
            search:"key_like", 
            limit:"_limit"
        },
        sftypes:{
            all:baseUrl+"sftypes",
            limit: 10
        },
        ftypes:{
            all:baseUrl+"ftypes",
            limit: 10
        },
        species:{
            all:baseUrl+"species",
            limit: 10
        },
        regions: {
            all:baseUrl+"regions",
            limit: 10
        },
        taxonomies: {
            all:baseUrl+"taxonomies",
            limit: 10
        },
        continents:{
            all:baseUrl+"continents"
        },
        country:{
            groupsSpecies:"assets/data/country/groups-species.json",
            info:baseUrl+"countryInfo?",
            species: "assets/data/country/species.json?ccode=",
            ftype: "assets/data/country/ftype.json?ccode=",
            sFtype: "assets/data/country/sftype.json?ccode=",
            devSpecies: "assets/data/country/devspecies.json?ccode=",
        },
        countries:{
            all:baseUrl+"countries",
            limit: 10,
            ftype: "assets/data/countries/ftype.json",
            ftypeBySpecies: "assets/data/countries/ftype-filtered.json?specie=",
            sFtype: "assets/data/countries/sftype.json",
            sFtypeBySpecies: "assets/data/countries/sftype-filtered.json?ftype=",
            species: "assets/data/countries/species.json",
        },
        use:{
            chart02:"assets/data/use/chart02.json",
            chart03:"assets/data/use/chart03.json",
            chart06:"assets/data/use/chart06.json",
            chart07:"assets/data/use/chart07.json",
            chart08:"assets/data/use/chart08.json",
            chart09:"assets/data/use/chart09.json",
            chart10:"assets/data/use/chart10.json",
            chart11:"assets/data/use/chart11.json",
            chart12:"assets/data/use/chart12.json",
            chart13:"assets/data/use/chart13.json",
        },
        policies:{
            chart01:"assets/data/policies/chart01.json",
            chart02:"assets/data/policies/chart02.json",
            chart03:"assets/data/policies/chart03.json",
            chart04:"assets/data/policies/chart04.json",
            chart05:"assets/data/policies/chart05.json",
            chart06:"assets/data/policies/chart06.json",
        },
        common:{
            chart04:commonPath+"chart04.json",
            chart05:commonPath+"chart05.json",
            chart06:commonPath+"chart06.json",
            chart09:commonPath+"chart09.json",
        }
    }

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/dist/zone-error';  // Included with Angular CLI.
