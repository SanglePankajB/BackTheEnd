const express = require('express');
const router = express.Router();
const tasks = require('./taskArray')

const fs = require("fs")

// Sample data to simulate a database (we can replace with actual database integration)
// const tasks = [{ id: 1, title: 'Learn Express' },
// { id: 2, title: 'Create Express App' }];

// Create a new task
router.post('/', (req, res) => {
  const { title } = req.body;

  // Basic input validation
  if (!title) {
    return res.status(400).json({ error: 'Title is required.' });
  }

  const newTask = {
    id: tasks.length + 1,
    title,
  };

 
  tasks.push(newTask);
  const newdataarr = JSON.stringify(tasks)
  // data which will be written in file taskArray.js
  const datatowrite =  `module.exports = ${newdataarr}`
  fs.writeFileSync("./taskArray.js",datatowrite)

  res.status(201).json(newTask);
});

// Get all tasks
router.get('/', (req, res) => {
  res.json(tasks);
});

// Delete a task by ID
router.delete('/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const taskIndex = tasks.findIndex((t) => t.id === taskId);

  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Task not found.' });
  }

  // Remove the task from the array
  const deletedTask = tasks.splice(taskIndex, 1)[0];

  res.json(deletedTask);


  // patch for partial updation in your todo data
  // Update a task by ID
//     router.patch('/:id', (req, res) => {         //  /update/:id'
//     const taskId = parseInt(req.params.id);
//     const { title } = req.body;
  
//     const taskIndex = tasks.findIndex((t) => t.id === taskId);
  
//     if (taskIndex === -1) {
//       return res.status(404).json({ error: 'Task not found.' });
//     }
  
//     // Update the task's title
//     if(title){
//         tasks[taskIndex].title = title;
//     }
  
//     res.json(tasks[taskIndex]);
//   });
  


});

module.exports = router;




