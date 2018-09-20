// brunch-config.js for brunch-test by cxw42

// Make our wrapped files stand out a bit more in the generated source
let seen_modules = Object.create(null);
    // to count how many times each file is processed

function wrapper(path, data)
{
    seen_modules[path] = (seen_modules[path] || 0) + 1;
    //console.log(`Wrapping ${path}; time #${seen_modules[path]}`);

    let retval = '\n// WRAPPED ' + `${path} #${seen_modules[path]}` +
        ' /////////////////////////////////\n';

    // Add the commonjs wrapper - copied from
    // https://github.com/brunch/brunch/blob/95902d9c24efb61e613c6c45bc6a33b819ec51ee/lib/utils/modules.js#L7
    retval += `
require.register("${path}", function(exports, require, module) {
${data}
});\n\n`

    retval += '\n/////////////////////////////////\n\n';
    return retval;
} //wrapper

// === The config ===============================================

module.exports = {
    paths: {
        // Bundle from these:
        watched: ['app', 'lib', 'vendor'],
            // All of these will be wrapped, except for those matching
            // conventions.vendor below.  For example, lib/* will be wrapped.
    },

    files: {
        javascripts: {
            joinTo: 'app.js',   // Any and all JS into here
            order: {
                before: /^vendor\//,
                    // conventions.vendor below specifies that *_tl* are
                    // top-level modules.  This line causes files in the
                    // vendor/ directory to go before other vendor files,
                    // e.g., *_tl* files.  All the vendor files go after
                    // the wrapped modules.
            },
        },
    },

    conventions: {
        // Don't wrap the following in modules:
        vendor: [ /((^bower_components|node_modules|vendor)\/)|(_tl)/ ],
            // default, plus _tl.  Note, however, that node_modules
            // appears to be handled specially by
            // https://github.com/brunch/deppack so that CommonJS modules
            // can be used in the browser.
            //
            // _tl is so that individual source files can be flagged as
            // top-level (unwrapped).  However, note that dependencies in
            // vendor files are not detected.
    },

    // Use the helpers we defined above
    modules: {

        // Special wrapper that adds names
        //wrapper,    // Note: only applies to things that get wrapped,
                    // i.e., non-`vendor`.

        // Map lib/foo->foo
        nameCleaner: path => path.replace(/^(app|lib)\//,''),
            // node_modules support is built in to brunch, so we don't have to
            // handle it here.
    },

    plugins: {
        replacer: {     // Permit using __filename in modules
            dict: [
                {
                    key: /\b__filename\b/,
                    // No value needed - the custom replacer below supplies it
                }
            ],
            replace: (str, key, value, path) => {
                return str.split(key).join(`'${path}'`)
            }
        },
    },

    overrides: {
        production: {       // Always generate source maps, even in production
            sourceMaps: true,
        },
    },
};

// vi: set ts=4 sts=4 sw=4 et ai: //
