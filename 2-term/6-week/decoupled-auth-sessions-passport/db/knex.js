var environment = process.env.ENV || 'development';
var config = require('../knexfile.js')[environment];
module.exports = require('knex')(config);
