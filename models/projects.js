const db = require("../data/config")

const find = () => {
    return db("projects")
}

const findProjectResources = (id) => {
    return db("projects_resources as pr")
        .innerJoin("projects as p", "p.id", "pr.project_id")
        .leftJoin("resources as r", "r.id", "pr.resource_id")
        .where("p.id", id)
        .select(
            "p.id",
            "p.name",
            "p.description",
            "r.name as resource_name",
            "r.description as resource_description"
        )
}

const findProjectTasks = (id) => {
    return db("tasks as t")
        .innerJoin("projects as p", "p.id", "t.project_id")
        .where("p.id", id)
        .select(
            "p.id",
            "p.name",
            "p.description",
            "t.description as task_description"
        )
}

const post = (newProject) => {
    return db("projects")
        .insert(newProject)
}

module.exports = {
    find,
    post,
    findProjectResources,
    findProjectTasks
}