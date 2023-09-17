// Modules - Encapsulated code (only share Minimum)
// CommonJS, every file is a module (by default)


// import {names} from "./4-names";
// import {sayHi} from "./5-utlis";

const names = require("./4-names");
const sayHi = require("./5-utlis");
// console.log(names);
const data = require("./6-alternative-flavor");
// console.log(data);
require("./7-mind-grenade")

sayHi("Susan");
sayHi(names.john);
sayHi(names.peter);