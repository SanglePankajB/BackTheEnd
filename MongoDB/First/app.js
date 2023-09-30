const express = require('express');
const app = express();
const port = 3000; // Choose your desired port number

const connectDb = require('./db/connect')       // It will return promise

// Middleware for parsing JSON data
app.use(express.json());

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// connecting to db first before starting server
const start = async () =>{
    try {
        await connectDb()
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);   // If you see this line in console then that means it is connected to db and started server as well
        }); 
    } catch (e){
        console.log(e)     
    }   
}
start()



//  Mounting the Router
// const tasksRouter = require('./tasks');
// app.use('/tasks', tasksRouter);

