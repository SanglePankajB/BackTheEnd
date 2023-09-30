import { play } from  "./es6Module.mjs"      // this is exported normal
import funAll from "./es6Module.mjs"        // this is exported default
// hence we can specify any name to value that we export as default  in our case funAll

console.log(play())
funAll()

// whenever there is error like Cannot use import statement outside a module in that case your file is not treated as es6 module and to get rid of error you can use the extension .mjs instead of .js which will treat the file as  ES6 modules by default