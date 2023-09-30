const express = require("express");
const router = express.Router();

// Get all tasks
router.get("/hello", (req, res) => {
    try {
        res.set({
            "Content-Type": "text/text",                // the accept header is set by the client(browser)
        })
        res.render("hello")
    } catch (error) {
        res.status(404).json({ error: "Page Not Found" })
    }
});

module.exports = router;
