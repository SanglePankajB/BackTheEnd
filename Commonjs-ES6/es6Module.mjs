// ES6 introduced a native module system for JavaScript that is now widely supported in modern web browsers and can also be used in Node.js 

// you can export a single value (function, variable, object, etc.) as the default export of a module
//There can only be one default export per module.


export function play(){
    return `Hi this is play`;
}

export default function all(){
    console.log(`Hi this is all`)

}

