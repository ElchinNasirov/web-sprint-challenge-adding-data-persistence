const express = require("express")
const Tasks = require("../models/tasks")

const router = express.Router()

// Retrieves list of projects
router.get("/", async (req, res, next) => {
    try {
        const tasks = await Tasks.find()
        res.json(tasks)
    }
    catch (err) {
        next(err)
    }
})

router.post("/", async (req, res, next) => {
    try {
        const newTask = req.body
        await Tasks.post(newTask)
        res.json(newTask)
    }
    catch (err) {
        next(err)
    }
})

module.exports = router;