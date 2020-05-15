const countries = require("./countries");
const taxonomies = require("./taxonomies");
const species = require("./species");
const ftypes = require("./ftypes");
const sftypes = require("./sftypes");

module.exports = () => ({
    countries,
    taxonomies,
    species,
    ftypes,
    sftypes
});

