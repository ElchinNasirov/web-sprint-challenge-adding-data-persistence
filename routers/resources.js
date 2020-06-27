const express = require("express")
const Resources = require("../models/resources")

const router = express.Router()

// Retrieves list of resources
router.get("/", async (req, res, next) => {
    try {
        const resources = await Resources.find()
        res.json(resources)
    }
    catch (err) {
        next(err)
    }
})

// Posts new resource(s)
router.post("/", async (req, res, next) => {
    try {
        const newResource = req.body
        await Resources.post(newResource)
        res.json(newResource)
    }
    catch (err) {
        next(err)
    }
})

module.exports = router;