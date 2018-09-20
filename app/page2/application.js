'use strict';

// Pull dependencies we will use from elsewhere, so that they will be bundled
require('simpletest');
require('multidex');
const rgn = require('random-game-name');

// Our code
console.log({require});

const App = {
  init() {
    console.log('Hello, world! from page2 ' + rgn.random());
  }
};

module.exports = App;
console.log("hello from " + __filename);

require('simpletestnm')();
