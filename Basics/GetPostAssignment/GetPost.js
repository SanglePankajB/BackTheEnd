// In this assignment there are two ways to deal with request, 2 modules http and express there is another way request promise as well

///////////////////////////////////////////////////////////////////////////////////////////////

const http = require("http");
const fs = require("fs");
const port = 3000;

const express = require("express");
const app = express();
const bodyParser = require("body-parser"); //Body Parsing Middleware facilitates the parsing of the incoming request body in a format that can be easily used

// when you use body-parser or express.json(), it takes the raw JSON data from the request body and parses it into a JavaScript object that you can access as req.body within your route handlers.

app.use(bodyParser.json());

app.get('/gdata', (req, res) => {
    const homefile = fs.readFileSync('./Basics/GetPostAssignment/data.json', (err, data)=>{
        console.log("success")
        
        return (err, data)
    })
    res.send(homefile)
})

app.post('/pdata', (req, res) => {
    // Get the data from the request body
    const data = req.body;
    // console.log(data)            // now json data have become js object

  // writing data to file

    // fs.writeFile('./Basics/GetPostAssignment/data.json', JSON.stringify(data), (err) => {
    //   if (err) {
    //     console.error('Error writing to file:', err);
    //     return res.status(500).send('Error writing to file');
    //   }
    //   console.log('Data written to file successfully');
    //   res.status(200).send('Data written to file successfully');
    // });
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})





// const server = http.createServer((req, res) => {
//     if (req.method === "GET") {
//         if (req.url === "/gdata") {
//             try {
//                 const d = fs.readFileSync(
//                     "./Basics/GetPostAssignment/data.json",
//                     "utf-8"
//                 ); 
//                 res.end(d);
//             } catch (error) {
//                 res.end(
//                     JSON.stringify({
//                         error: "Failed to read data from file",
//                     })
//                 );
//             }
//         } else {
//             res.end(
//                 JSON.stringify({ error: "Invalid request URL" })
//             );
//         }
//     } else if (req.method === "POST") {
//         if (req.url === "/pdata") {
//             let body = "";
//             req.on("data", (chunk) => {
//                 //  request body may be received in multiple chunks.
//                 body += chunk;
//             });

//             req.on("end", () => {
//                 try {
//                     const data = JSON.parse(body); // conv into js Obj
//                     fs.writeFileSync(
//                         "./Basics/GetPostAssignment/data1.json",
//                         JSON.stringify(data)
//                     );

//                     res.end(
//                         JSON.stringify({
//                             message: "Data written to file successfully",
//                         })
//                     );
//                 } catch (error) {
//                     res.end(
//                         JSON.stringify({
//                             error: "Failed to write data to file",
//                         })
//                     );
//                 }
//             });
//         } else {
//             res.end(
//                 JSON.stringify({ error: "Invalid request URL" })
//             );
//         }
//     } else {
//         res.writeHead(404, { "Content-Type": "text/plain" });               // takes status code and other 2 optional arguments
//         res.end(JSON.stringify({ error: "Not Found" }));
//     }
// });

// server.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });
