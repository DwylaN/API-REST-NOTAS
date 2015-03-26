/**
* Dependencias
*/
var notas = require('express')();
var Nota_Model = require('../../models/notas/notas_model.js');

/**
* Funciones
*/
var findAllNotas = function(req, res) {
	Nota_Model.find(function(err, nota) {
		if(!err){
			res.status(200).json(nota);
		}else{
			res.status(400).send(err);
			console.log('ERROR: ' + err );
		}
	});
};

var findNotaByID = function (req, res) {	
	Nota_Model.findById(req.params.id , function(err , nota) {
		if (!err){
			res.status(200).json(nota);
		}else{
			res.status(400).send(err);
			console.log('ERROR: ' + err );
		}
	});
}

var addNota =  function (req, res){
	console.log('POST');
	console.log(req.body);

	var notaNueva = new Nota_Model({
		titulo: req.body.titulo,
		cuerpo: req.body.cuerpo,
		tipo: 	req.body.tipo
	});

	notaNueva.save(function(err) {
		if (!err){
			res.status(201).json(notaNueva);
			console.log('Nota Guardada!');
		}else{
			res.status(400).send(err.errors);
			console.log('ERROR: ' + err );
		}
	});

}

var updateNota = function(req, res) {
	Nota_Model.findById(req.params.id, function(err, nota) {
		if (!err) {
		nota.titulo = req.body.titulo;
		nota.cuerpo = req.body.cuerpo;
		nota.tipo 	= req.body.tipo;

		nota.save(function(err) {
			if(!err) {
				res.status(200).json(nota);
				console.log('Nota actualizada" %s "',nota._id);
			} else {
				res.status(400).send(err);
				console.log('ERROR: ' + err);
			}
		});
		}else{
			res.status(400).send(err);
		}
	});
}

var deleteNota = function(req, res) {
	Nota_Model.findById(req.params.id, function(err, nota) {
		if (!err) {
		nota.remove(function(err) {
			if(!err) {
				console.log('Nota Eliminada " %s "',nota._id);
				res.status(200).json(nota);
			} else {
				console.log('ERROR: ' + err);
				res.json(nota);
			}
		});
		}else{
			res.status(400).send(err);
		}
	});
}

/**
* Rutas
*/

notas.get('/', findAllNotas );
notas.get('/:id', findNotaByID );
notas.post('/', addNota );
notas.put('/:id', updateNota );
notas.delete('/:id', deleteNota );

/**
* Exporacion de modulo
*/
module.exports = notas;









