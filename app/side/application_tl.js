'use strict';
// SIDE APPTL

console.log("hello from " + __filename);

var Modules = require('side/dependencies');
    // Need this in a separate, non-vendor module, so that Brunch will scan
    // it for dependencies.

const tl_cowsay=require('cowsay');

var App = {
  init() {
    console.log(tl_cowsay.say({text: 'Side hello, world!'}));
    console.log(Modules.cowsay.say({text: 'Side hello, world from Modules.cowsay!'}));
  }
};


require('simpletestnm')();

console.log('Call from side/application_tl to single file: ' + require('side/side_helper')());
console.log('Call from side/application_tl to libmodule: ' + require('lib/libmodule')());
// vi: set ts=4 sts=4 sw=4 et ai: //
