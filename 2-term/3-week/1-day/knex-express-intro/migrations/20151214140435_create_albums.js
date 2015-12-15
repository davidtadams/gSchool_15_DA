
exports.up = function(knex, Promise) {
  return knex.schema.createTable('albums', function(table){
    table.increments();
    table.string('artist');
    table.string('name');
    table.string('genre');
    table.integer('stars');
    table.boolean('explicit')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('albums');
};
