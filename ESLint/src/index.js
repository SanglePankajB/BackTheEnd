var a=10
console.log("---------------    Printing    ------------------------")
console.log(a)
console.log("\n")

if(1){
    console.log("Hi");
}




// First we download the eslint and include it in dev dependencies  npm i eslint --save-dev

// In package.json we modify
//      "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1"
//   },
//   To
//     "scripts": {
//     "lint": "eslint ."          // to keep watch on all files .
//   },

// NOTE: we can run sripts like npm run <name of script>
// -   it will not give any eror while running code but when we check whether the specified practices were folowed or not then we'll get to see what all were messed

// we just need to install the eslint packge and everything will be done with just one file .eslintrc.js and command npm run lint