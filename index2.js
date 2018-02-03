const knex = require('./config').knex

const atacante = {
	numerojogador: 11,
	nomejogador: 'Pascal'
}
knex('jogador')
	.insert(atacante, 'idjogador') //(inserir, retornar)
	.then(e => {
		console.log(e)
	})
