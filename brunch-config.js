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

// Trim module names in lib/ so that we can require('foo') rather than
// require('lib/foo').  See, e.g., https://stackoverflow.com/q/18859007/2877364
function nameCleaner(path)
{
    return path.replace(/^(app|lib)\//,'');
        // app/ is trimmed by default, so keep it in there.

    // node_modules support is built in to brunch, so we don't have to
    // handle it here.
} //nameCleaner

// === The config ===============================================

module.exports = {
    paths: {
        // Bundle from these:
        watched: ['app', 'lib', 'vendor', 'wapp', 'test'],
            // All of these will be wrapped, except for those matching
            // conventions.vendor below.
    },

    files: {
        javascripts: {
            joinTo: {
                'vendor.js': /^(?!app\/)/,
            },
            entryPoints: {
                'app/page1/main1.js': 'packed1.js',
                'app/page2/main2.js': 'packed2.js',
            },
        },
    },

    conventions: {
        // Don't wrap the following in modules:
        vendor: [ /(^bower_components|node_modules|vendor|^wapp)\// ],
            // default, plus ^wapp.  Note, however, that node_modules
            // appears to be handled specially by
            // https://github.com/brunch/deppack so that CommonJS modules
            // can be used in the browser.
            //
            // In this example, lib/ is watched but is not a vendor directory.
            // Therefore, modules in lib/ are wrapped.
    },

    // Use the helpers we defined above
    modules: {

        // Special wrapper that adds names
        wrapper,    // Note: only applies to things that get wrapped,
                    // i.e., non-`vendor`.

        // Map lib/foo->foo
        nameCleaner,
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
