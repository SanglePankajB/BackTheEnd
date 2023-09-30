// const homefile = fs.readFileSync('./HTMLs/index.html', (err, data)=>{
//     return (err, data)
// })
//  res.end(aboutfile)

// This is one way and below is another

// const aboutfile = fs.readFileSync('./HTMLs/about.html', 'utf8')  // no way to handle error
// res.end(aboutfile)






// const http = require('http')

// const port = 3000  // whatever port is set as env or 3000

// const server = http.createServer((req, res)=>{

// const fs = require('fs')

//     res.setHeader('Content-Type', 'text/html')      // the request will be served in html form
//     if(req.url === '/home'){
//         res.statusCode = 200;
//         // const homefile = fs.readFile('./HTMLs/index.html', 'utf8')   // fs.readFile() is a non blocking operation so before it returns any output the execution moves to further code and hence it will not render the desired output in our case Hence we need to use readFileSync which will complete its exection and then execution context will move to next line
           
//         const homefile = fs.readFileSync('./HTMLs/index.html', (err, data)=>{
//             return (err, data)
//         })
//         res.end(homefile)

//     }else if(req.url === '/about'){
//         res.statusCode = 200;
//         const aboutfile = fs.readFileSync('./HTMLs/about.html', 'utf8')
//         res.end(aboutfile)
//     }else if(req.url === '/'){
//         res.end("<h1> Use proper endpoints to navigate on homepage and about page <h1>")
//     }else{
//         res.statusCode = 404;
//         res.end("<h1> Bro your page not found <h1>")
//     }

// }) 
// server.listen(port, ()=>{
//     console.log(`Server is listening on port ${port}`) 
// })


//  IMP : 
//  So this is one way of handling the rest api calls we can make our simple website run but it is not feasible way in big projects as code gets so messy and hugh  thats where Express comes into picture
// Express makes it easy
// below is the express way


// Test it on Postman

const fs = require('fs')
const express = require('express')
const app = express()
const port = 3000

app.get('/index', (req, res) => {
    const homefile = fs.readFileSync('./HTMLs/index.html', (err, data)=>{
        return (err, data)
    })
    res.send(homefile)
})
app.get('/about', (req, res) => {
    const about = fs.readFileSync('./HTMLs/about.html', (err, data)=>{
        return (err, data)
    })
    res.send(about)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// 