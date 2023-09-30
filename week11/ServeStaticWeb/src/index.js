const express = require("express")
const app = express()
const path = require("path")

const staticPath = path.join(__dirname, "../public")

app.use(express.static(staticPath))

app.get("/home", (req, res) =>{
    res.send("This is home...")
})

app.listen(3000, () =>{
    console.log("Listening port at 3000")
    
})