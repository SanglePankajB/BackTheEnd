const express = require('express');

const app = express()

app.get("/tryid/:id", (req, res) =>{
    res.send(req.params.id)
}).listen(3000, ()=>{
    console.log("listening..........")
    
})