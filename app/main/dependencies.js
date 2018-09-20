// dependencies.js: Pull dependencies we will use from elsewhere,
// so that they will be bundled.  This is the entryPoint used by Brunch
// to start bundling.

// A static require statement that brunch will pick up on, but that will
// never actually run.  This lists all of the top-level modules not referenced
// in the module.exports array, below.
if((window||global||this||{}).this_var_should_never_ever_exist_bang) {
    require('./application_tl');
    require('./z_tl');
    require('vendor/foo');
}

module.exports = {
    simpletest: require('lib/simpletest'),
    simpletestnm: require('simpletestnm'),
    multidex: require('lib/multidex'),
    cowsay: require('cowsay'),
    libmodule: require('lib/libmodule'),
    app_helper: require('main/app_helper'),
};

