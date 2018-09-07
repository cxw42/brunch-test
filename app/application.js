'use strict';

console.log({require});

const cowsay=require('cowsay');

const App = {
  init() {
    console.log(cowsay.say({text: 'Hello, world!'}));
  }
};

module.exports = App;
console.log("hello from application.js");
