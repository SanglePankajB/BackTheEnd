const express = require("express");
const router = express.Router();
const tasks = require("./data/taskArray");
const path = require("path");
// import fs from "fs"
const fs = require("fs");
const logger = require("./logs/loggerMod");

// Create a new task
router.post("/add", (req, res) => {
    const { title } = req.body;
    // Basic input validation
    if (!title) {
        logger.error("Did not recieved title from request body")
        return res.status(400).json({ error: "Title is required." });
    }

    const newTask = {
        id: tasks.length + 1,
        title,
    };

    tasks.push(newTask);
    const newdataarr = JSON.stringify(tasks);
    // data which will be written in file taskArray.js
    const datatowrite = `module.exports = ${newdataarr}`;
    fs.writeFileSync("./data/taskArray.js", datatowrite);
    logger.info("Task added successfully")
    // To show newly updated tasks list
    res.redirect(`http://localhost:3000/tasks/todo`);
});

// Get all tasks
router.get("/todo", (req, res) => {
    try {
        // hi 
        res.render("todos", {
            tasks: tasks, // passing obj as data to view template
        })
    } catch (error) {
        logger.error(error);
        res.status(404).json({ error: "Page Not Found" })
    }

});

router.get("/newtodo", (req, res) => {
    res.render("newTodo")
});
router.get("/", (req, res) => {
    try {
        res.render("main");
    } catch (error) {
        res.status(404).json({ "error": "Page Not Found" })
    }
});

router.delete("/delete/:id", (req, res) => {
    
    logger.debug("Inside Delete Handler");

    const taskId = parseInt(req.params.id);

    const taskIndex = tasks.findIndex((ele) => ele.id === taskId);
    // findIndex return -1 if dont find id in array

    if (taskIndex === -1) {
        return res.status(404).json({ error: "Task not found." });
    }

    // Remove the task from the array
    //   tasks.splice(taskIndex, 1)[0];
    tasks.splice(taskIndex, 1);
    // return res.status(200)
    // const newdataarr = JSON.stringify(tasks);
    // const datatowrite = `module.exports = ${newdataarr}`;
    // fs.writeFileSync("./data/taskArray.js", datatowrite);

    res.redirect(`http://localhost:3000/tasks/todo`);
});

module.exports = router;
