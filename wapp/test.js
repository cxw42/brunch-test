console.log('Hello from wapp/test.js at the top level!');
var cowsay=require('cowsay');
    // The `cowsay` variable is now visible in the developer console ---
    // it is at the top level.
console.log(cowsay.say({text: 'Hello, world from toplevel!'}));
console.log('/Toplevel');
