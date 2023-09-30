const express = require('express');
const router = express.Router();
const tasks = require('../taskArray')

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

  // trying to stringify object to store as json key value pairs

  const djson = JSON.stringify(newTask)

  //////////////////

  tasks.push(djson);
//   const newdataarr = JSON.stringify(tasks)
  fs.writeFileSync("./taskArray.js", `module.exports = ${tasks}`)

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
});

module.exports = router;




