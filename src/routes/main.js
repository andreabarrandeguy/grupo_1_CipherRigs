const express = require('express');
const route = express.Router();
const mainController = require('../controllers/mainController');
const productosController = require('../controllers/productosController');
const usuariosController = require('../controllers/usuariosController');

route.get('/', mainController.index); //localhost3000
route.get('/nosotros', mainController.nosotros); //localhost3000/nosotros
route.get('/contacto', mainController.contacto); //localhost3000/contacto
route.get('/asic', productosController.asic); //localhost3000/asic
route.get('/rigs', productosController.rigs); //localhost3000/rigs
route.get('/productCart', productosController.carrito); //localhost3000/carrito

route.get('/productos', productosController.detalle); //localhost3000/productos
route.get('/productEdit', productosController.editCreateProdruct); //localhost3000/Creacion y Edicion de productos
route.post('/guardar',productosController.guardarProducto);

route.get('/login', usuariosController.login); //localhost3000/loguearse
route.get('/register', usuariosController.register); //localhost3000/register

module.exports = route;