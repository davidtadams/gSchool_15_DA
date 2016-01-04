
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('player').del().then(function() {
    return Promise.all([
      knex('player').insert({
        first_name: 'Brock',
        last_name: 'Osweiler',
        jersey_num: 17,
        position: 'QB',
        date_started: '09/01/2012'
      }),
      knex('player').insert({
        first_name: 'Peyton',
        last_name: 'Manning',
        jersey_num: 18,
        position: 'QB',
        date_started: '09/01/2010'
      }),
      knex('player').insert({
        first_name: 'Chris',
        last_name: 'Harris Jr',
        jersey_num: 25,
        position: 'CB',
        date_started: '09/01/2012'
      }),
      knex('player').insert({
        first_name: 'Demaryius',
        last_name: 'Thomas',
        jersey_num: 88,
        position: 'WR',
        date_started: '09/01/2010'
      })
    ])
  });
};
