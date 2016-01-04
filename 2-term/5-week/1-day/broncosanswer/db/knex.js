var environment = process.env.ENV || 'development';
var config = require('../knexfile')[environment];
var knex = require('knex')(config);
module.exports = knex;
