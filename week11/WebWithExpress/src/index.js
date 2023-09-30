const express = require("express")
const app = express()
const path = require("path")
const Router = require('../router/routes');

const staticPath = path.join(__dirname, "../public")

// app.use(express.static(staticPath))

app.set('view engine', 'hbs')           // handlebar temp engine setting
// app.set('views', viewPath);
app.use('/', Router);

app.listen(3000, () =>{
    console.log("Listening port at 3000")  
})