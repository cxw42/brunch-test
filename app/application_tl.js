'use strict';
// APPTL

require('dependencies');

// Our code
console.log({require});

const tl_cowsay=require('cowsay');

var App = {
  init() {
    console.log(tl_cowsay.say({text: 'Hello, world!'}));
  }
};

//module.exports = App;
console.log("hello from application.js");

require('simpletestnm')();

console.log('Call from application_tl to single file: ' + require('app_helper')());
