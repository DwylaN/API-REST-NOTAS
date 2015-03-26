/**
* Dependencias y variables
*/
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
* Schema mongodb para las notas
*/
var nota_model = new Schema({
	titulo: { type: String },
	cuerpo: { type: String },
	tipo: 	{ type: String,
				enum : ['Personal', 'Trabajo', 'Familiar', 'Otros']
			}
});

/**
* Exporacion de modulo
*/
module.exports = mongoose.model('notas_model', nota_model);