const db = require("../data/config")

const find = () => {
    return db("tasks")
}

const post = (newTask) => {
    return db("tasks")
        .insert(newTask)
}

module.exports = {
    find,
    post
}