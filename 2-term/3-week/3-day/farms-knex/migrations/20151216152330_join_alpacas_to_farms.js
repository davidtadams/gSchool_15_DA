
exports.up = function(knex, Promise) {
  return knex.schema.createTable('farms_alpacas', function (table) {
    table.increments();
    table.integer('farm_id').unsigned().references('id').inTable('farms').onDelete('cascade')
    table.integer('alpaca_id').unsigned().references('id').inTable('alpacas').onDelete('cascade')
  }).then(function () {
    return knex.schema.table('alpacas', function (table) {
      table.dropColumn('farm_id');
    })
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('farms_alpacas').then(function () {
    return knex.schema.table('alpacas', function (table) {
      table.integer('farm_id').unsigned().references('id').inTable('farms').onDelete('cascade')
    })
  })
};
