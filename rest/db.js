const continents = require("./continents");
const countryInfo = require("./countryInfo");
const countries = require("./countries");
const taxonomies = require("./taxonomies");
const species = require("./species");
const ftypes = require("./ftypes");
const sftypes = require("./sftypes");

module.exports = () => ({
    continents,
    countryInfo,
    countries,
    taxonomies,
    species,
    ftypes,
    sftypes
});

