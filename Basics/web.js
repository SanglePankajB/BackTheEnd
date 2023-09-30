const http = require('http')

const port = 3000  // whatever port is set as env or 3000

const server = http.createServer((req, res)=>{
    
    res.setHeader('Content-Type', 'text/html')      // the request will be served in html form
    if(req.url === '/home'){
        res.statusCode = 200;
        res.end("<h1> You are on Home page <h1>")
    }else if(req.url === '/about'){
        res.statusCode = 200;
        res.end("<h1> You are on about page <h1>")
    }else if(req.url === '/'){
        res.end("<h1> Use proper endpoints to navigate on homepage and about page <h1>")
    }else{
        res.statusCode = 404;
        res.end("<h1> Bro your page not found <h1>")
    }

}) 
server.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`) 
})




