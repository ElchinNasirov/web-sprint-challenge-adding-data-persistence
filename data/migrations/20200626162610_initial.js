
exports.up = async function (knex) {

    await knex.schema.createTable("projects", table => {
        table.increments("id").unique()
        table.text("name", 128).notNull()
        table.text("description", 500)
        table.boolean("completed").defaultTo(false)
    })

    await knex.schema.createTable("resources", table => {
        table.increments("id").unique()
        table.text("name", 128).notNull()
        table.text("description", 500)
    })

    await knex.schema.createTable("tasks", table => {
        table.increments("id").unique()
        table.text("description", 500).notNull()
        table.text("notes", 500)
        table.boolean("completed").notNull().defaultTo(false)
        table
            .integer("project_id")
            .references("id")
            .inTable("projects")
            .onDelete("SET NULL")
            .onUpdate("CASCADE")
    })

    await knex.schema.createTable("projects_resources", table => {
        table
            .integer("project_id")
            .references("id")
            .inTable("projects")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")

        table
            .integer("resource_id")
            .references("id")
            .inTable("resources")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
    })
};

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists("projects_resources")
    await knex.schema.dropTableIfExists("tasks")
    await knex.schema.dropTableIfExists("resources")
    await knex.schema.dropTableIfExists("projects")
};
