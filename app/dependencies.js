// dependencies.js: Pull dependencies we will use from elsewhere,
// so that they will be bundled.  This file is actually never require()d
// from anywhere, but brunch uses it to expand the tree.
// Note: This is because dependency tracking only happens in wrapped
// modules, not in vendor modules.
module.exports = {
    simpletest: require('simpletest'),
    simpletestnm: require('simpletestnm'),
    multidex: require('multidex'),
    cowsay: require('cowsay'),
    libmodule: require('libmodule'),
};

