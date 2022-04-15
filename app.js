const express=require('express');
const app=express();
const path=require('path');

app.use(express.static('views'));

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

app.get('/nosotros', (req, res) => { // Pagina de registro
    res.status(200).sendFile(path.join(__dirname, 'views/nosotros.html'));
});

app.get('/contacto', (req, res) => { // Pagina de registro
    res.status(200).sendFile(path.join(__dirname, 'views/contacto.html'));
});

app.get('/asic', (req, res) => { // Pagina de registro
    res.status(200).sendFile(path.join(__dirname, 'views/asic.html'));
});

app.get('/rigs', (req, res) => { // Pagina de registro
     res.status(200).sendFile(path.join(__dirname, 'views/rigs.html'));
});

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000')});
