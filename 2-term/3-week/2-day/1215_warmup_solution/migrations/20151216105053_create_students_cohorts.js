
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cohorts', function(table){
    table.increments();
    table.string('name');
  }).then(function(){
    return knex.schema.createTable('students', function(table){
        table.increments();
        table.string('name');
        table.integer('cohort_id').unsigned().references('id').inTable('cohorts').onDelete('cascade');
      });
  });
};

exports.down = function(knex, Promise) {

};
