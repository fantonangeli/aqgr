const countryInfo = require("./countryInfo");
const countries = require("./countries");
const taxonomies = require("./taxonomies");
const species = require("./species");
const ftypes = require("./ftypes");
const sftypes = require("./sftypes");

module.exports = () => ({
    countryInfo,
    countries,
    taxonomies,
    species,
    ftypes,
    sftypes
});

