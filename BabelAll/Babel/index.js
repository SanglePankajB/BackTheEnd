// Entry File (index.js)
import { es6Message, es6Function } from './es6module';
const commonJsModule = require('./commonjsmodule');

console.log(es6Message);
console.log(es6Function());
console.log(commonJsModule.commonJsMessage);
console.log(commonJsModule.commonJsFunction());
