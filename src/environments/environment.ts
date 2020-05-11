// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const baseUrl="http://localhost:3000/";

export const environment = {
    production: false,
    logging:true,

    services:{
        fishStatCultSpecCountries: {
            all:"assets/data/FishStatSpecCountries.json",
            bySpecies:"../assets/data/FishStatSpecCountries.ASFISCode-MSM.json?species=",
            byFtype:"../assets/data/FishStatSpecCountries.ASFISCode-MSM.json?species="
        },
        sftypes:{
            all:baseUrl+"sftypes",
            params: {taxonomy:"taxonomies_like", specie:"species_like", ftype:"ftypes_like", limit:"_limit"},
            limit: 10
        },
        ftypes:{
            all:baseUrl+"ftypes",
            params: {taxonomy:"taxonomies_like", specie:"species_like", limit:"_limit"},
            limit: 10
        },
        species:{
            all:baseUrl+"species",
            params: {search:"key_like", taxonomy:"taxonomy", limit:"_limit"},
            limit: 10
        },
        taxonomies: {
            all:baseUrl+"taxonomies",
            params: {limit:"_limit"},
            limit: 10
        },
        country:{
            info: "assets/data/country/info.json?ccode=",
            species: "assets/data/country/species.json?ccode=",
            ftype: "assets/data/country/ftype.json?ccode=",
            sFtype: "assets/data/country/sftype.json?ccode=",
            devSpecies: "assets/data/country/devspecies.json?ccode=",
        },
        countries:{
            ftype: "assets/data/countries/ftype.json",
            ftypeBySpecies: "assets/data/countries/ftype-filtered.json?specie=",
            sFtype: "assets/data/countries/sftype.json",
            sFtypeBySpecies: "assets/data/countries/sftype-filtered.json?ftype=",
            species: "assets/data/countries/species.json",
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
