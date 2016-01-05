
exports.up = function(knex, Promise) {
    return knex.schema.createTable('player', function(table){
      table.increments();
      table.string('first_name');
      table.string('last_name');
      table.string('position');
      table.date('date_started');
      table.integer('jersey_number').unique().unsigned();
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('player');
};
