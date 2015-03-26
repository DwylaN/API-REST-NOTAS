/**
* Dependencias
*/
var express = require('express'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	inicio = require('./routes/inicio/index'),
	notas  = require('./routes/notas/index');

/**
* Variables locales
*/
var app = express();

/**
* Middleware
*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/**
* Asignacion de Rutas - routes
*/
app.use('/',inicio);
app.use('/notas',notas);

/**
* Conexion a la base de datos
*/

mongoose.connect('mongodb://localhost/notas', function(err, res) {
	if(err) {
		console.log('ERROR: Conectando a la base de datos ' + err);
	} else {
		console.log('Se conecto a la base de datos');
	}
});

/**
* Servidor 
*/
var server = app.listen(3000, function () {
  var host =  'localhost' || server.address().address;
  var port = server.address().port;
  console.log('El servidor esta escuchando en  http://%s:%s', host, port);
});