// for exporting multiple fun

function add(a, b){
    return a+b;
}

function subtract(a, b){
    return a-b;
}

function multiply(a, b){
    return a*b;
}

const obj = {
    name : "Pankaj",
    age : 22
}

exports.add = add
exports.subtract = subtract
exports.multiply = multiply
exports.obj = obj
