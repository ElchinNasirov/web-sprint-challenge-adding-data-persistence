const db = require("../data/config")

const find = () => {
    return db("projects")
}

const post = (newProject) => {
    return db("projects")
        .insert(newProject)
}

module.exports = {
    find,
    post
}