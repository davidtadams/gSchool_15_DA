try {
	require('dotenv').load();
} catch (err) {
	console.error(err);
}
var express = require('express'), app = express();
var cors = require('cors');
var knex = require('knex')(require('./knexfile')[process.env.ENVIRONMENT || 'development']);

app.use(cors());

app.get('/', function(request, response) {
	knex('broncos').then(function(broncos) {
		response.json({ broncos: broncos });
	}).catch(function(err) {
		console.error(err);
		response.err(err);
	});
});

app.listen(process.env.PORT || 8000, function() {
  console.log('The NSA is listening on port', process.env.PORT || 8000);
});
