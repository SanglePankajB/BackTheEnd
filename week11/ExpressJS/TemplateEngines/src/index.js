const express = require('express');
const hbs = require('hbs')
const app = express()

app.set('view engine', 'hbs')
// if want to change tha views folder name

const path = require('path')
// var staticpath = path.join(__dirname, "../public")
var pathname = path.join(__dirname, "../templates/views")         // if you want templares folder instead of views
var partialpath = path.join(__dirname, "../templates/partials")         // if you want templares folder instead of views

app.set('views', pathname)
hbs.registerPartial(partialpath)

// app.use(express.static(staticpath))

app.get('/', (req, res) =>{
    res.render('index')
})

// var customers = {
//     1 : "Pankaj",
//     2 : "Vivek",
//     3 : "Sameer",
// }

// app.get("/customers/:/id", (req, res) =>{
//     res.render("customers", {custname:customers[req.params.id]})
// })
app.listen(3000)