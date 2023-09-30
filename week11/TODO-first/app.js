const express = require('express');
const app = express();
const port = 3000; // Choose your desired port number

// Middleware for parsing JSON data
app.use(express.json());

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//  Mounting the Router
const tasksRouter = require('./tasks');
app.use('/tasks', tasksRouter);

