// Entry File (index.js)

// import { es6Message, es6Function } from './es6module.js';
// const es6 = require(esm)("./es6module")

require = require('esm')(module);

const commonJsModule = require('./commonjsmodule.js');
const es = require('./es6module');

console.log(es.es6Message);
console.log(es.es6Function());
console.log(commonJsModule.commonJsMessage);
console.log(commonJsModule.commonJsFunction());
