
exports.seed = function(knex, Promise) {
  return knex('broncos').del().then(function() {
    return Promise.all([
      knex('broncos').insert({ name: 'Ben', favorite_color: 'blue', favorite_number: 7, iq: 99, height: 73 }),
      knex('broncos').insert({ name: 'Sam', favorite_color: 'saffire', favorite_number: 71, iq: 181, height: 70 }),
      knex('broncos').insert({ name: 'Noah', favorite_color: 'pink', favorite_number: 99, iq: 182, height: 71 }),
      knex('broncos').insert({ name: 'Brian', favorite_color: 'black', favorite_number: 41, iq: 183, height: 71 }),
      knex('broncos').insert({ name: 'John', favorite_color: 'orange', favorite_number: -7, iq: 184, height: 70 }),
      knex('broncos').insert({ name: 'Derek', favorite_color: 'turquoise', favorite_number: 0, iq: 185, height: 72 }),
      knex('broncos').insert({ name: 'Isaac', favorite_color: 'red', favorite_number: 42, iq: 186, height: 74 }),
      knex('broncos').insert({ name: 'Josh', favorite_color: 'yellow', favorite_number: 1, iq: 187, height: 71 }),
      knex('broncos').insert({ name: 'Alex', favorite_color: 'purple', favorite_number: 3, iq: 188, height: 71 }),
      knex('broncos').insert({ name: 'Llama', favorite_color: 'green', favorite_number: 1000000, iq: 189, height: 68 })
    ]);
  });
};
