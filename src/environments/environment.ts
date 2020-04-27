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
            all:"/assets/data/species/all.json",
            bytaxonomy:"/assets/data/species/bytaxonomy.json",
            byname:"/assets/data/species/byname.json",
        },
        taxonomies: "assets/data/FishStatCultTax.json",
        country:{
            species: "assets/data/country/species.json?ccode=",
            ftype: "assets/data/country/ftype.json?ccode=",
            sFtype: "assets/data/country/sftype.json?ccode=",
            devSpecies: "assets/data/country/devspecies.json?ccode=",
        },
        countries:{
            ftype: "assets/data/countries/ftype.json?ccode=",
            ftypeBySpecies: "assets/data/countries/ftype-filtered.json?ccode=",
            sFtype: "assets/data/countries/sftype.json?ccode=",
            sFtypeBySpecies: "assets/data/countries/sftype-filtered.json?ccode=",
            species: "assets/data/countries/species.json?ccode=",
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
