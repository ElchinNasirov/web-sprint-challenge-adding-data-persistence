const db = require("../data/config")

const find = () => {
    return db("resources")
}

const post = (newResource) => {
    return db("resources")
        .insert(newResource)
}

module.exports = {
    find,
    post
}