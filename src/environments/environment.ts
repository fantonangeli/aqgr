// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,

    services:{
        fishStatCultSpecCountries: {
            all:"assets/data/FishStatSpecCountries.json",
            bySpecies:"../assets/data/FishStatSpecCountries.ASFISCode-MSM.json?species=",
            byFtype:"../assets/data/FishStatSpecCountries.ASFISCode-MSM.json?species="
        },
        species:{
            all:"http://localhost:3000/species",
            params: {search:"key_like", taxonomy:"taxonomy", limit:"_limit"},
            limit: 10
        },
        taxonomies: {
            all:"assets/data/taxonomies/all.json",
        },
        country:{
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
