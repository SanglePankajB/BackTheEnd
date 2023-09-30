// 2 ways
// common js way of node

// for exporting single fun
module.exports = function add(a, b){
    return a+b;
}

// Or
// module.exports = add         // if you declare function expression above like const add =(a,b)=>{return a+b}