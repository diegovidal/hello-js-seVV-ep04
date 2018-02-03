const knex = require('./config').knex

// SELECT * FROM jogador:
knex('jogador').select().then(ret => {
	console.log(ret)
	process.exit(0) //finalizar execução do script
})