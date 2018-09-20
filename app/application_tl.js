'use strict';
// APPTL

var Modules = require('dependencies');
    // Need this in a separate, non-vendor module, so that Brunch will scan
    // it for dependencies.

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

console.log('Call from application_tl to single file: ' + require('app_helper')());
    // Is in `app/`, which is prefixed by default,
    // so we don't need a `./` or `app/`.
console.log('Call from application_tl to libmodule: ' + require('lib/libmodule')());
// vi: set ts=4 sts=4 sw=4 et ai: //
