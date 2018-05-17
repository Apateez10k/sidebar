const { Client } = require('pg');

const client = new Client({
	database: 'sidebar',
	user: 'postgres',
	password:'test',
});

client.connect((err) => {
  if (err) {
    console.error('connection error', err.stack)
  } else {
    console.log('connected')
  }
});

const findOne = (id) => {
	const restaurant = client.query('SELECT * FROM places WHERE id = $1 LIMIT 1', [id])
		.then(res => res.rows);

	return restaurant
		.then((results) => {
			const sendObj = results[0];
			return sendObj;
		});
}

exports.findOne = findOne;
exports.client = client;