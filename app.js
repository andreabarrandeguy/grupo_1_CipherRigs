const express=require('express');
const app=express();
const path=require('path');

app.use(express.static('public'));
app.use(express.static('views'));

app.set("view engine", "ejs");

//Rutas
const index = require('./src/routes/main');
const nosotros = require('./src/routes/main');
const contacto = require('./src/routes/main');
const productos = require('./src/routes/main');
const users = require('./src/routes/main');

app.use('/', index); //localhost3000
app.use('/nosotros', nosotros); //localhost3000/nosotros
app.use('/contacto', contacto); //localhost3000/contacto

app.use('/productos', productos); //localhost3000/productos
app.use('/carrito', productos); //localhost3000/carrito
app.use('/asic', productos); //localhost3000/asic
app.use('/rigs', productos); //localhost3000/rigs

app.use('/loguearse', users); //localhost3000/loguearse
app.use('/register', users); //localhost3000/register

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000')});
