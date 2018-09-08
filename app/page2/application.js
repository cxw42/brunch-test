'use strict';

// Pull dependencies we will use from elsewhere, so that they will be bundled
require('simpletest');
require('multidex');

// Our code
console.log({require});

const cowsay=require('cowsay');

const App = {
  init() {
    console.log(cowsay.say({text: 'Hello, world! from page2'}));
  }
};

module.exports = App;
console.log("hello from " + __filename);

require('simpletestnm')();
