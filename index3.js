const knex = require('./config').knex

const jogador = {
	numerojogador: 11,
	nomejogador: 'Diego Vidal'
}

knex('jogador')
	.update({nomejogador: jogador.nomejogador})
	.where({numerojogador: jogador.numerojogador})
	.then(ret => {
		console.log(ret)
		process.exit(0)
	})
	.catch(err => )