
exports.up = function(knex, Promise) {
  return knex.schema.createTable('students', function (table) {
    table.increments();
    table.string("first_name");
    table.string("last_name");
    table.string("email");
    table.date("date_of_birth");
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('students');
};
