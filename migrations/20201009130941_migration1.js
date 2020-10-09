
exports.up = function(knex) {
    return knex.schema
        .createTable("projects", tbl => {
            tbl.increments();
            tbl.string("name").notNullable().unique();
            tbl.string("description");
            tbl.boolean("completed");
        })

        .createTable("resources", tbl => {
            tbl.increments();
            tbl.string("name").notNullable().unique();
            tbl.string("description");
        })

        .createTable("tasks", tbl => {
            tbl.increments();
            tbl.string("description").nutNullable();
            tbl.string("notes");
            tbl.boolean("completed");
        });
};

exports.down = function(knex) {
  
};
