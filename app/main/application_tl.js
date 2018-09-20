'use strict';
// APPTL

var Modules = require('main/dependencies');
    // can't use './dependencies' because we're in the top level, where
    // there is no relativeRequire.

// Our code
console.log({require});

const tl_cowsay=require('cowsay');

var App = {
  init() {
    console.log(tl_cowsay.say({text: 'Hello, world!'}));
    console.log(Modules.cowsay.say({text: 'Hello, world from Modules.cowsay!'}));
  }
};

//module.exports = App;
console.log("hello from application.js");

require('simpletestnm')();

console.log('Call from application_tl to single file: ' + require('main/app_helper')());
    // app/ is prefixed by default, so main/... is enough.
console.log('Call from application_tl to libmodule: ' + require('lib/libmodule')());
// vi: set ts=4 sts=4 sw=4 et ai: //
