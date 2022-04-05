const express=require('express');
const app=express();
const path=require('path');

app.use(express.static('grupo_1_chiperrings'));

app.get('/', (req, res) => { // homepage
    res.status(200).sendFile(path.join(__dirname, 'views/index.html'));
});

app.get('/productos', (req, res) => { // Pagina de productos
    res.status(200).sendFile(path.join(__dirname, 'views/productDetail.html'));
});

app.get('/carrito', (req, res) => { // Pagina del carro
    res.status(200).sendFile(path.join(__dirname, 'views/productCart.html'));
});

app.get('/loguearse', (req, res) => { // Pagina de logeo
    res.status(200).sendFile(path.join(__dirname, 'views/login.html'));
});

app.get('/registro', (req, res) => { // Pagina de registro
    res.status(200).sendFile(path.join(__dirname, 'views/register.html'));
});

app.listen(3000, ()=> {
    console.log('Servidor corriendo en el puerto 3000');
});