const knex = require('knex')({
	client: 'sqlite3',
	connection: {
		filename: './soccer.db'
	},
	useNullAsDefault: true
})

module.exports = { knex }
