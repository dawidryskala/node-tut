// CommoonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

//always start with this one dot '.' because there's also going to be
// a third party modules and there's going to be built in modules in Node
// and the we'll use just therse quotation marks ''

const { john, peter } = require("./13-names");
const sayHi = require("./13-utils");
const data = require("./13-alternative-import");

require("./16-mind-grenade");
// if we have function inside in mind-grenade
// that we invoke yes that code will run
// even though we didn't assign it to a variable

// sayHi("Susan");
// sayHi(john);
// sayHi(peter);
