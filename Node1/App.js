// var http = require("http");

// http.createServer(function(req,res){
//     res.write("hello this is first node app")
//     res.end()   // otherwise it will be in listen mode and will nor finish its job
// }).listen(8080)  // we need to mention the port on which we want this to happer



var os = require('os')

console.log("Hostname is : "+os.hostname)
console.log("Home DIR is : "+os.homedir)
console.log("---------------------------------")
console.log(os.homedir)


