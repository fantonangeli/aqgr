const taxonomies = require("./taxonomies");
const species = require("./species");
const ftypes = require("./ftypes");
const sftypes = require("./sftypes");

module.exports = () => ({
    taxonomies,
    species,
    ftypes,
    sftypes
});

