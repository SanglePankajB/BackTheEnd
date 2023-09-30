const http = require('http')

const port = 3000  // whatever port is set as env or 3000
// const port = process.env.PORT || 3000  // whatever port is set as env or 3000

const server = http.createServer((req, res)=>{

    console.log("Request is printing");

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')      // the request will be served in html form
    // res.end("<h1> This is h1 tag in html <h1>")
    res.end("This is simple text")

})
server.listen(port, ()=>{
    console.log(`Server is listening on porr ${port}`) 
})




