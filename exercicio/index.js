const knex = require('./config').knex

const errorDialog = _ => {
	console.log('Preencha corretamente os parâmetros.')	
}

const errorKnex = _ => {
	console.log('Ocorreu um erro ao realizar a operação.')	
}

if(process.argv.length < 3) {
  errorDialog()
  return
}

const type = process.argv[2]
const object = process.argv[3]

const list = _ => {

	knex('contato')
		.select()
		.then(ret => {
			console.log(ret)
			process.exit(0) //finalizar execução do script
		})
		.catch(err => errorKnex())
}

const insert = (contato) => {

	knex('contato')
		.insert(object, 'idcontato')
		.then(ret => {
			console.log(ret)
			process.exit(0)
		})
		.catch(err => errorKnex)
}

switch(type){

	case 'insert':
		insert()
		break

	case 'update':
		break

	case 'delete':
		break

	case 'list':
		list()
		break

	default:
		break
}
