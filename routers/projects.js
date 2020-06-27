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

// Retrieves list of project(s) resources
router.get("/:id/resources", async (req, res, next) => {
    try {
        const projectID = req.params.id

        const projectResources = await Projects.findProjectResources(projectID)
        res.json(projectResources)
    }
    catch (err) {
        next(err)
    }
})

// Retrieves list of project(s) tasks
router.get("/:id/tasks", async (req, res, next) => {
    try {
        const projectID = req.params.id

        const projecttasks = await Projects.findProjectTasks(projectID)
        res.json(projecttasks)
    }
    catch (err) {
        next(err)
    }
})



// Posts new project(s)
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