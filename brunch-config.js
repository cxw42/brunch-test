// brunch-config.js for brunch-test by cxw42

// Make our wrapped files stand out a bit more in the generated source
function wrapper(path, data)
{
    let retval = `\n// ${path} /////////////////////////////////\n`;
    // Add the commonjs wrapper - copied from
    // https://github.com/brunch/brunch/blob/95902d9c24efb61e613c6c45bc6a33b819ec51ee/lib/utils/modules.js#L7
    retval += `
require.register("${path}", function(exports, require, module) {
    ${data}
});\n\n`
    retval += "\n/////////////////////////////////\n\n";
    return retval;
} //wrapper

// === The config ===============================================

module.exports = {
    paths: {
        // Bundle from these:
        watched: ['app', 'test', 'vendor', 'wapp'],
    },

    files: {
        javascripts: {
            joinTo: 'app.js',   // Any and all JS into here
        },
    },

    conventions: {
        // Don't wrap the following in modules:
        vendor: [ /(^bower_components|node_modules|vendor|^wapp)\// ],
            // default, plus ^wapp
    },

    // Use the wrapper we defined above
    modules: { wrapper },   // Note: only applies to things that get wrapped,
                            // i.e., non-`vendor`.
};

// vi: set ts=4 sts=4 sw=4 et ai: //
