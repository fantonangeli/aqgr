const baseUrl="https://aqgr-demo-rest.herokuapp.com/";

export const environment = {
    production: true,
    logging:true,

    services:{
        fishStatCultSpecCountries: {
            all:"assets/data/FishStatSpecCountries.json",
            bySpecies:"../assets/data/FishStatSpecCountries.ASFISCode-MSM.json?species=",
            byFtype:"../assets/data/FishStatSpecCountries.ASFISCode-MSM.json?species="
        },
        params: {
            continent:"continent_like", 
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
        taxonomies: {
            all:baseUrl+"taxonomies",
            limit: 10
        },
        continents:{
            all:baseUrl+"continents"
        },
        country:{
            info:baseUrl+"countryInfo?",
            species: "assets/data/country/species.json?ccode=",
            ftype: "assets/data/country/ftype.json?ccode=",
            sFtype: "assets/data/country/sftype.json?ccode=",
            devSpecies: "assets/data/country/devspecies.json?ccode=",
            chart03:"assets/data/country/chart03.json",
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
            chart01:"assets/data/use/chart01.json",
            chart02:"assets/data/use/chart02.json",
            chart03:"assets/data/use/chart03.json",
            chart04:"assets/data/use/chart04.json",
            chart05:"assets/data/use/chart05.json",
            chart06:"assets/data/use/chart06.json",
            chart07:"assets/data/use/chart07.json",
            chart08:"assets/data/use/chart08.json",
            chart09:"assets/data/use/chart09.json",
            chart10:"assets/data/use/chart10.json",
            chart11:"assets/data/use/chart11.json",
            chart12:"assets/data/use/chart12.json",
            chart13:"assets/data/use/chart13.json",
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
