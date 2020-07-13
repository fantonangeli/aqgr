const baseUrl="http://localhost:3000/";
const dataPath="assets/data/";
const commonPath=dataPath+"common/";
const countryPath=dataPath+"country/";
const countriesPath=dataPath+"countries/";
const policiesPath=dataPath+"policies/";
const usePath=dataPath+"use/";
const homePath=dataPath+"home/";

export const environment = {
    production: false,
    logging:true,
    defaultAccordionIsOpenValue:true,
    lastTimeseriesYear:"2017",

    /**
     * default date format used to format dates 
     */
    defaultDateFormat:"dd/MM/yyyy",

    services:{
        home:{
            globalInfo:homePath+"globalInfo.json"
        },
        fishStatCultSpecCountries: {
            all:homePath+"FishStatSpecCountries.json",
            bySpecies:dataPath+"FishStatSpecCountries.ASFISCode-MSM.json?species=",
            byFtype:dataPath+"FishStatSpecCountries.ASFISCode-MSM.json?species="
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
            info:baseUrl+"specieInfo?",
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
            groupsSpecies:countryPath+"groups-species.json",
            info:baseUrl+"countryInfo?",
            chart01:countryPath+"chart01.json",
            chart02:countryPath+"chart02.json",
            chart03:countryPath+"chart03.json",
            chart04:countryPath+"chart04.json",
            chart05:countryPath+"chart05.json",
        },
        countries:{
            all:baseUrl+"countries",
            limit: 10,
            ftype: countriesPath+"ftype.json",
            ftypeBySpecies: countriesPath+"ftype-filtered.json?specie=",
            sFtype: countriesPath+"sftype.json",
            sFtypeBySpecies: countriesPath+"sftype-filtered.json?ftype=",
            species: countriesPath+"species.json",
        },
        use:{
            chart02:usePath+"chart02.json",
            chart03:usePath+"chart03.json",
            chart06:usePath+"chart06.json",
            chart07:usePath+"chart07.json",
            chart08:usePath+"chart08.json",
            chart09:usePath+"chart09.json",
            chart10:usePath+"chart10.json",
            chart11:usePath+"chart11.json",
            chart12:usePath+"chart12.json",
            chart13:usePath+"chart13.json",
        },
        policies:{
            chart01:policiesPath+"chart01.json",
            chart02:policiesPath+"chart02.json",
            chart03:policiesPath+"chart03.json",
            chart04:policiesPath+"chart04.json",
        },
        common:{
            chart04:commonPath+"chart04.json",
            chart05:commonPath+"chart05.json",
            chart06:commonPath+"chart06.json",
            chart09:commonPath+"chart09.json",
            chart12:commonPath+"chart12.json",
            chart13:commonPath+"chart13.json",
            chart14:commonPath+"chart14.json",
            chart15:commonPath+"chart15.json",
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
