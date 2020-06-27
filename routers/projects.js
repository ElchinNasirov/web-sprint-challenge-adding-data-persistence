const express = require("express")
const Projects = require("../models/projects")

const router = express.Router()

// Retrieves list of projects
router.get("/", async (req, res, next) => {
    try {
        const projects = await Projects.find()
        res.json(projects)
    }
    catch (err) {
        next(err)
    }
})

router.post("/", async (req, res, next) => {
    try {
        const newProject = req.body
        await Projects.post(newProject)
        res.json(newProject)
    }
    catch (err) {
        next(err)
    }
})

module.exports = router;