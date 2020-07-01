const continents = require("./continents");
const regions = require("./regions");
const countryInfo = require("./countryInfo");
const countries = require("./countries");
const taxonomies = require("./taxonomies");
const species = require("./species");
const ftypes = require("./ftypes");
const sftypes = require("./sftypes");
const specieInfo = require("./specieInfo");

module.exports = () => ({
    continents,
    regions,
    countryInfo,
    countries,
    taxonomies,
    species,
    ftypes,
    sftypes,
    specieInfo
});

