# AqGR Services

Here is the documentation of the REST services used in AqGR Information System.


## Filter services

This services are used by the filters, the select inputs and the charts

| Environment key | Url | Description | Format | Angular Service |
| --- | --- | --- | --- | --- |
| continents.all | http://localhost:3000/continents | All continents | keyval | ContinentsService |
| regions.all | http://localhost:3000/regions?continent_like=Asia&_limit=10 | All regions | keyval | RegionsService |
| countries.all | http://localhost:3000/countries?continent_like=Asia&region_like=Eastern%20Asia&_limit=10&_sort=key | All countries | keyval | CountriesService |
| taxonomies.all | http://localhost:3000/taxonomies?continent_like=Asia&_limit=10 | All taxonomies | keyval | TaxonomiesService |
| species.all | http://localhost:3000/species?continent_like=Asia&region_like=Eastern%20Asia&taxonomy_like=Diadromous%20fishes&_limit=10 | All species | keyval | SpeciesService |
| ftypes.all | http://localhost:3000/ftypes?taxonomy_like=Molluscs&specie_like=Crassostrea%20spp&_limit=10 | All farmed types | keyval | FtypesService |
| sftypes.all | http://localhost:3000/sftypes?taxonomy_like=Molluscs&specie_like=Crassostrea%20spp&_limit=10 | All secondary farmed types | keyval | SFtypesService |


## Home page services 

This services are used to get data in home page

| Environment key | Url | Description | Format | Angular Service |
| --- | --- | --- | --- | --- |
| home.globalInfo | http://localhost:4200/assets/data/home/globalInfo.json | Global related stats | data | GlobalInfoService |
| fishStatCultSpecCountries.all | http://localhost:4200/assets/data/home/FishStatSpecCountries.json | Data of the hp table and Species Fact Sheet page | treeTable | FishStatCultSpecCountriesService |


## Species Fact Sheet services 

This services are used to get data in Species Fact Sheet page

| Environment key | Url | Description | Format | Angular Service |
| --- | --- | --- | --- | --- |
| specie.info | http://localhost:3000/specieInfo?alphaCode=OYC | Gives data of a specie: Eg.scientificName, prodution | data | SpecieInfoService |
| specie.chart01 | http://localhost:4200/assets/data/specie/chart01.json | Number of <i>in vivo</i> gene banks of <i>specieName</i> reported by country in each region | keyval+data | SpecieChart01Service |
| specie.chart02 | http://localhost:4200/assets/data/specie/chart02.json | Number of <i>in vitro</i> gene banks of <i>specieName</i> reported by country in each region | stackedKeyval+data | SpecieChart02Service |
| specie.chart03 | http://localhost:4200/assets/data/specie/chart03.json | Number of records for <i>specieName</i> under control measures | stackedKeyval+data | SpecieChart03Service |


## Country Fact Sheet services 

This services are used to get data in Country Fact Sheet page

| Environment key | Url | Description | Format | Angular Service |
| --- | --- | --- | --- | --- |
| country.info | http://localhost:3000/countryInfo?iso3=CHN | Gives data of a country: Eg.countryname, prodution | data | CountryInfoService |
| country.groupsSpecies | http://localhost:4200/assets/data/country/groups-species.json |  |  | CountryGroupsSpeciesService |
| country.chart01 | http://localhost:4200/assets/data/country/chart01.json | Number and effectiveness of Aquatic Protected Areas | keyval | CountryChart01Service |
| country.chart02 | http://localhost:4200/assets/data/country/chart02.json | Number of <i>in vivo</i> and <i>in vitro</i> gene banks by taxonomic category | keyval | CountryChart02Service |
| country.chart03 | http://localhost:4200/assets/data/country/chart03.json | Number of species under control measures by taxonmic category | stackedKeyval | CountryChart03Service |
| country.chart04 | http://localhost:4200/assets/data/country/chart04.json | Number of policies affecting AqGR | keyval | CountryChart04Service |
| country.chart05 | http://localhost:4200/assets/data/country/chart05.json | Number of institutions supporting R&D on aquatic genetic resources | keyval | CountryChart05Service |


## Conservation & Sustainable Use services 

This services are used to get data for Conservation & Sustainable Use services  

| Environment key | Url | Description | Format | Angular Service |
| --- | --- | --- | --- | --- |
| use.chart03 | http://localhost:4200/assets/data/use/chart03.json | The proportion (%) of aquaculture production that comes from non-native species by continent | keyval | UseChart03Service |
| use.chart06 | http://localhost:4200/assets/data/use/chart06.json | Number of species whose introduction represents a risk by taxonomic category | stackedKeyval | UseChart06Service |
| use.chart07 | http://localhost:4200/assets/data/use/chart07.json | Numbers and effectiveness of aquatic projected areas by continent | stackedKeyval | UseChart07Service |
| use.chart08 | http://localhost:4200/assets/data/use/chart08.json | Number of species with live gene banks by continent | keyval | UseChart08Service |
| use.chart09 | http://localhost:4200/assets/data/use/chart09.json | Number of species with live gene banks by taxonomic category | keyval | UseChart09Service |
| use.chart10 | http://localhost:4200/assets/data/use/chart10.json | Top 10 species conserved in live gene banks | keyval | UseChart10Service |
| use.chart11 | http://localhost:4200/assets/data/use/chart11.json | No of species with <i>in vitro</i> gene banks by continent | stackedKeyval | UseChart11Service |
| use.chart12 | http://localhost:4200/assets/data/use/chart12.json | No of species with reported <i>in vitro</i> gene banks by taxonomy categories | stackedKeyval | UseChart12Service |
| use.chart13 | http://localhost:4200/assets/data/use/chart13.json | Top 10 species conserved <i>in vitro</i> gene banks | stackedKeyval | UseChart13Service |
| policies.chart01 | http://localhost:4200/assets/data/policies/chart01.json |  Number of species under control measures by continent  | stackedKeyval | PoliciesChart01Service |
| policies.chart02 | http://localhost:4200/assets/data/policies/chart02.json |  Number of species under control measures by taxonomic category | stackedKeyval | PoliciesChart02Service |
| policies.chart03 | http://localhost:4200/assets/data/policies/chart03.json | Proportion of policy areas addressed by national policy | keyval | PoliciesChart03Service |
| policies.chart04 | http://localhost:4200/assets/data/policies/chart04.json | Research institutions and the issues addressed by them | keyval | PoliciesChart04Service |


## Common services 

This services are used to get data used by charts that are in shown in multiple pages

| Environment key | Url | Description | Format | Angular Service |
| --- | --- | --- | --- | --- |
| common.chart04 | http://localhost:4200/assets/data/common/chart04.json | Top 10 non-native species by production volume | keyval | CommonChart04Service |
| common.chart05 | http://localhost:4200/assets/data/common/chart05.json | Prevalence of non-native species | keyval | CommonChart05Service |
| common.chart06 | http://localhost:4200/assets/data/common/chart06.json | Production of primary farmed types | keyval | CommonChart06Service |
| common.chart08 | http://localhost:4200/assets/data/common/chart08.json | Proportion of farmed native and non-native species reported by continent | stackedKeyval | CommonChart08Service |
| common.chart09 | http://localhost:4200/assets/data/common/chart09.json | Risk status of species reported as cultured by continent | stackedKeyval | CommonChart09Service |
| common.chart12 | http://localhost:4200/assets/data/common/chart12.json | Number of primary farmed types by taxonomic category | stackedKeyval | CommonChart12Service |
| common.chart13 | http://localhost:4200/assets/data/common/chart13.json | Top 10 species for which farmed types are developed | stackedKeyval | CommonChart13Service |
| common.chart14 | http://localhost:4200/assets/data/common/chart14.json | Educational institutions and the issues addressed by them | keyval | CommonChart14Service |
| common.chart15 | http://localhost:4200/assets/data/common/chart15.json | Educational institutions and the levels of education delivered by them | keyval | CommonChart15Service |


<br>
<br>

# Services Parameters

These parameters are accepted by all services of this project under the SearchServiceParams class and the parameter names sent to the REST services are configured in environment.services.params

| Key | REST param | Type | Description |
| --- | --- | --- | --- |
| continent | continent_like | string | The continent name |
| region | region_like | string | The region name |
| country | country_like | string | The country name |
| taxonomy | taxonomy_like | string | The taxonomy name |
| specie | specie_like | string | The specie name |
| ftype | ftype_like | string | The primary ftype |
| sftype | sftype_like | string | The secondary ftype |
| search | key_like | string | Free text to search by name |
| limit | _limit | number | Used to limit the number of results |
| sortBy | _sort | string | The field as string to sort by |

<br>
<br>

# JSON properties list

To avoid different property names and use always the same style here is a sort the list of all the properties of all the JSONs.   
Note: Only properties from the services used for tables are not written here.

```json
{
    "name": "Algae",
    "nameEn": "Afghanistan",
    "key":"Algae",
    "value": 23,
    "data":[] || {},
    "timeseries": {
        "2017": 664530
    },
    "ftypes": 9,
    "sftypes": 0,
    "native": true,
    "alphaCode": "SWX",
    "iso3": "AFG",
    "totalSpecies":1500,
    "totalCountries":241,
    "totalFtypes":4,
    "totalSftypes":7,
    "lastModifiedDate":"2020-05-15",
    "scientificName": "Laminaria japonica",
}
```

<br>
<br>

# JSON data formats

These are the defined formats for the JSON responses. 


## Keyval format

Used in many parts like pie charts, filters, bar charts... This format is an array of ojects {key:string, value:string}.  
Below some example:

ContinentsService:
```json
[
  {
    "key": "Asia",
    "value": 1155
  },
  {
    "key": "Europe",
    "value": 1064
  },
  ...
]
```
UseChart09Service:
```json
[
  {
    "key": "Marine finfish ",
    "value": 38
  },
  {
    "key": "Euryhaline finfish",
    "value": 17
  },
  ...
]
```

### Keyval+data:
There are few charts with a tooltip with a list of element inside. For this purpose an optional data array with a keyval format is used inside each element:
SpecieChart01Service:
```json
[
  {
    "key": "Europe",
    "value": 45
  },
  {
    "key": "Latin America and the Caribbean",
    "value": 34,
    "data":[
        {"key":"Argentina", "value":10},
        {"key":"Bolivia", "value":5},
        {"key":"Brazil", "value":4},
        {"key":"Chile", "value":2},
        {"key":"Colombia", "value":2},
        {"key":"Costa Rica", "value":2},
        {"key":"Cuba", "value":2},
        {"key":"Dominican Republic", "value":2},
        {"key":"Ecuador", "value":1},
        {"key":"El Salvador", "value":1},
        {"key":"French Guiana", "value":1},
        {"key":"Guadeloupe", "value":1},
        {"key":"Guatemala", "value":1}
    ]
  },
    ...
]
```


## StackedKeyval format

Used in charts with stacked bars or columns... This format is basically an array of ojects {key:string, value:[{key:string, value:string}]}.  
Below an example:

UseChart07Service:
```json
[
  {
    "key": "Gametes",
    "values": [
      {
        "key": "Europe",
        "value": 34
      },
      {
        "key": "Latin America and the Caribbean",
        "value": 32
      },
      {
        "key": "Asia",
        "value": 23
      },
      {
        "key": "Africa",
        "value": 12
      },
      {
        "key": "North America",
        "value": 23
      }
    ]
  },
  {
    "key": "Embryos",
    "values": [
      {
        "key": "Europe",
        "value": 2
      },
      {
        "key": "Latin America and the Caribbean",
        "value": 4
      },
      {
        "key": "Asia",
        "value": 2
      },
      {
        "key": "Africa",
        "value": 3
      },
      {
        "key": "North America",
        "value": 3
      }
    ]
  },
  ...
]
```

### StackedKeyval+data:
There are few charts with a tooltip with a list of element inside. For this purpose an optional data array with a keyval format is used inside each element:
SpecieChart02Service:
```json
[
  {
    "key": "Gametes",
    "values": [
      {
        "key": "Europe",
        "value": 34
      },
      {
        "key": "Latin America and the Caribbean",
        "value": 32,
        "data":[
            {"key":"Argentina", "value":8},
            {"key":"Bolivia", "value":5},
            {"key":"Brazil", "value":4},
            {"key":"Chile", "value":2},
            {"key":"Colombia", "value":2},
            {"key":"Costa Rica", "value":2},
            {"key":"Cuba", "value":2},
            {"key":"Dominican Republic", "value":2},
            {"key":"Ecuador", "value":1},
            {"key":"El Salvador", "value":1},
            {"key":"French Guiana", "value":1},
            {"key":"Guadeloupe", "value":1},
            {"key":"Guatemala", "value":1}
        ]
      },
    ...
]
```




## Data format

This is not a defined format and is used mainly in dynamic text. 
Below some example:

SpecieInfoService:
```json
[
  {
    "scientificName": "Crassostrea spp",
    "lastModifiedDate": "2020-05-15",
    "timeseries": {
      "2017": 4905215.24
    },
    "alphaCode": "OYC"
  }
]
```  
 
CountryInfoService:
```json
[
  {
    "nameEn": "China",
    "iso3": "CHN",
    "lastModifiedDate": "2020-05-15"
  }
]
```


## Tree table data format

This is not a defined format and is used mainly in dynamic text. 
Below some example:

FishStatCultSpecCountriesService:
```json
{
  "Continents": [
    {
      "Name": "Asia",
      "Species": 88,
      "FTypes": 894,
      "SFTypes": 808,
      "Timeseries": {
        "2013": 78795067.5,
        "2014": 82439267.64,
        "2015": 86710022.07,
        "2016": 90411470.48,
        "2017": 93342628.58
      },
      "Regions": [
        {
          "Name": "Southern Asia",
          "Species": 13,
          "FTypes": 152,
          "SFTypes": 146,
          "Timeseries": {
            "2013": 5608861,
            "2014": 6004916,
            "2015": 6440158,
            "2016": 6990149,
            "2017": 7535274
          },
          "Countries": [
            {
              "Name": "Bangladesh",
              "Ccode": "BGD",
              "Species": 6,
              "FTypes": 57,
              "SFTypes": 90,
              "Timeseries": {
                "2013": 1364701,
                "2014": 1418284,
                "2015": 1503078,
                "2016": 1607878,
                "2017": 1686841
              }
            },
            {
              "Name": "India",
              "Ccode": "IND",
              "Species": 7,
              "FTypes": 95,
              "SFTypes": 56,
              "Timeseries": {
                "2013": 4244160,
                "2014": 4586632,
                "2015": 4937080,
                "2016": 5382271,
                "2017": 5848433
              }
            }
          ]
        },
...
}
```  



