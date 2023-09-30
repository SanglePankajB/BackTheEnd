const express = require('express');
// import express from 'express';
const app = express();
const port = 3000; // Choose your desired port number
const logger = require('./logs/loggerMod');


// Middleware to parse the body of HTTP requests, crucial when need to handle form submissions
const bodyParser = require('body-parser');
// Middleware to override default method POST to DELETE while submitting form for delete operation
const methodOverride = require('method-override');
// template engine
const hbs = require('hbs');
const path = require('path');


// Middleware for parsing JSON data
// app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));

const viewPath = path.join(__dirname, 'templates/views');
const partialPath = path.join(__dirname, 'templates/partials');
app.set('view engine', 'hbs');
app.set('views', viewPath);
// To enable the use of partial
hbs.registerPartials(partialPath);


// Error handling middleware
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('Something broke!');
// });


app.use(methodOverride('_method'));         // order of middlewares is very important

//  Mounting the Router
const tasksRouter = require('./tasks');
app.use('/tasks', tasksRouter);

// Export for testing purpose in super-spec.js
module.exports = app;
if((process.env.NODE_ENV !== 'test')){
    app.listen(port, () => {
        logger.info(`Server is running on port ${port}`);
        console.log(`Server is running on port ${port}`);
    });
}
