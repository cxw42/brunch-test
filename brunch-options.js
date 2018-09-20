// brunch shadow command-line parser

let program = require('commander');
let parsed = {};

// Brunch CLI, modified from brunch/lib/cli.js.
program
  .version(require('./package.json').version, '-v, --version')
  .usage('[command] [options]');

program.command('new [path]')
  .alias('n')
  .description('Create new Brunch project in path.')
  .option('-s, --skeleton [name]', 'skeleton name or URL from brunch.io/skeletons')
  .on('--help', function() {
    require('init-skeleton').printBanner('brunch new -s');
  })
  .action( (...args)=>{parsed.parsed_new=[...args];} );

program.command('build [path]')
  .alias('b')
  .description('Build a Brunch project.')
  .option('-e, --env [setting]', 'specify a set of override settings to apply')
  .option('-p, --production', 'same as `--env production`')
  .option('-d, --debug [pattern]', 'print verbose debug output to stdout')
  .option('-j, --jobs [num]', 'parallelize the build')
  .option('-c, --config [path]', 'specify a path to Brunch config file')
  .action( (...args)=>{parsed.parsed_build=[...args];} );

program.command('watch [path]')
  .alias('w')
  .description('Watch Brunch directory and rebuild if something changed.')
  .option('-e, --env [setting]', 'specify a set of override settings to apply')
  .option('-p, --production', 'same as `--env production`')
  .option('-s, --server', 'run a simple http server for the public dir on localhost')
  .option('-n, --network', 'if `server` was given, allow access from the network')
  .option('-P, --port [port]', 'if `server` was given, listen on this port')
  .option('-d, --debug [pattern]', 'print verbose debug output to stdout')
  .option('-j, --jobs [num]', 'parallelize the build')
  .option('-c, --config [path]', 'specify a path to Brunch config file')
  .option('--stdin', 'listen to stdin and exit when stdin closes')
  .action( (...args)=>{parsed.parsed_watch=[...args];} );
// End of brunch cli.js code

let args = process.argv.slice();
program.parse(args);

parsed.commander = program;
module.exports = parsed;

