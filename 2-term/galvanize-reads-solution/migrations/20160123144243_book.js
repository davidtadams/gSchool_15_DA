exports.up = function(knex, Promise) {
    return knex.schema.createTable("book", function(bookTable){
        bookTable.increments("id");
        bookTable.string("title");
        bookTable.string("genre");
        bookTable.text("description");
        bookTable.text("cover_url");
    });  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable("book");
};
