
exports.up = function(knex, Promise) {
  return knex.schema.table('alpacas', function (table) {
    table.integer('farm_id').unsigned().references('id').inTable('farms').onDelete('cascade')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('alpacas', function (table) {
    table.dropColumn('farm_id');
  });
};
