inner = require('./lib/inner');
module.exports = function() {
  console.log("This is a message from the simpletest package");
  inner();
}
