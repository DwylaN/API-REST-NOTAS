/**
* Dependencias
*/
var inicio = require('express')();

/**
* Rutas
*/

inicio.get('/', function(req, res, next) {
  res.send('Bienvenido !! ');
});

/**
* Exporacion de modulo
*/
module.exports = inicio;
