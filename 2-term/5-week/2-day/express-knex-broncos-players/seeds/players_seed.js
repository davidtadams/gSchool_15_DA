// {number: 17, name: 'Osweiler, Brock', position: 'QB', age: '25', college: 'Arizona State', exp: '4'},
// {number: 18, name: 'Manning, Peyton', position: 'QB', age: '39', college: 'Tennessee', exp: '18'},
// {number: 25, name: 'Harris Jr., Chris', position: 'CB', age: '26', college: 'Kansas', exp: '4'},
// {number: 88, name: 'Thomas, Demaryius', position: 'WR', age: '28', college: 'Georgia Tech', exp: '6'}


exports.seed = function(knex, Promise) {
  return knex('player').del().then(function(){
    return Promise.all([
      knex('player').insert({
        first_name: 'Brock',
        last_name: 'Osweiler',
        jersey_number: 17,
        position: 'QB',
        date_started: '09/01/2012'
      }),
      knex('player').insert({
        first_name: 'Peyton',
        last_name: 'Manning',
        jersey_number: 18,
        position: 'QB',
        date_started: '09/01/2012'
      }),
      knex('player').insert({
        first_name: 'Chris',
        last_name: 'Harris Jr.',
        jersey_number: 25,
        position: 'CB',
        date_started: '09/01/2011'
      }),
      knex('player').insert({
        first_name: 'Demaryius',
        last_name: 'Thomas',
        jersey_number: 88,
        position: 'WR',
        date_started: '09/01/2010'
      })
    ])
  });
};
