exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable("student", function(table){
            table.increments("id");
            table.string("first_name");
            table.string("last_name");
            table.date("date_of_birth");
            table.string("email");
        })
    ]);  
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTableIfExists("student")
    ]);
};
