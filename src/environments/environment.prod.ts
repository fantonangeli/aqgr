const baseUrl="https://aqgr-demo-rest.herokuapp.com/";
const assetsPath="assets/";
const dataPath=assetsPath+"data/";
const commonPath=dataPath+"common/";
const countryPath=dataPath+"country/";
const countriesPath=dataPath+"countries/";
const policiesPath=dataPath+"policies/";
const usePath=dataPath+"use/";
const homePath=dataPath+"home/";
const speciePath=dataPath+"specie/";

export const environment = {
    production: true,
    logging:false,
    defaultAccordionIsOpenValue:false,
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
            all:homePath+"FishStatSpecCountries.json"
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
            limit:"_limit",
            sortBy:"_sort"
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
        specie:{
            info:baseUrl+"specieInfo?",
            chart01:speciePath+"chart01.json",
            chart02:speciePath+"chart02.json",
            chart03:speciePath+"chart03.json",
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
        },
        use:{
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
            chart08:commonPath+"chart08.json",
            chart09:commonPath+"chart09.json",
            chart12:commonPath+"chart12.json",
            chart13:commonPath+"chart13.json",
            chart14:commonPath+"chart14.json",
            chart15:commonPath+"chart15.json",
        }
    },

    paths:{
        i18n:assetsPath+"i18n",
    }

};
