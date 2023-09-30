const http = require("http")

const server = http.createServer((req, res)=>{
    res.end("Ended with this")
}).listen(3000,() =>{
    console.log("Listening........")
    
})