function wrapper(path, data)
{
    let retval = `\n// ${path} /////////////////////////////////\n`;
    if(path === 'application.js') {
        retval += data;
    } else {
        retval += `
require.register("${path}", function(exports, require, module) {
    ${data}
});\n\n`
    }
    retval += "\n/////////////////////////////////\n\n";
    return retval;
} //wrapper

module.exports = {
    files: {
        javascripts: {
            joinTo: 'app.js',
            //order: {
            //    after: 'app/*.js',
            //},
        },
    },
    //modules: { wrapper },
    //modules: {wrapper: false},
};

// vi: set ts=4 sts=4 sw=4 et ai: //
