// main1.js
'use strict';

// Pull dependencies we will use from elsewhere, so that they will be bundled
require('simpletest');
require('multidex');

// Our code
console.log({require});

const cowsay=require('cowsay');

const App = {
  init() {
    console.log(cowsay.say({text: 'Hello, world!'}));
  }
};

module.exports = App;
console.log("hello from main1.js");

require('simpletestnm')();
