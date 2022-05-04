const express=require('express');
const app=express();
const path=require('path');

app.use(express.static('public'));
app.use(express.static('views'));


app.get('/', (req, res) => { // homepage
    res.status(200).sendFile(path.join(__dirname, '/src/views/index.html'));
});

app.get('/productos', (req, res) => { // Pagina de productos
    res.status(200).sendFile(path.join(__dirname, '/src/views/products/productDetail.html'));
});

app.get('/carrito', (req, res) => { // Pagina del carro
    res.status(200).sendFile(path.join(__dirname, '/src/views/products/productCart.html'));
});

app.get('/loguearse', (req, res) => { // Pagina de logeo
    res.status(200).sendFile(path.join(__dirname, '/src/views/users/login.html'));
});

app.get('/register', (req, res) => { // Pagina de registro
    res.status(200).sendFile(path.join(__dirname, '/src/views/users/register.html'));
});

app.get('/nosotros', (req, res) => { // Pagina de registro
    res.status(200).sendFile(path.join(__dirname, '/src/views/nosotros.html'));
});

app.get('/contacto', (req, res) => { // Pagina de registro
    res.status(200).sendFile(path.join(__dirname, '/src/views/contacto.html'));
});

app.get('/asic', (req, res) => { // Pagina de registro
    res.status(200).sendFile(path.join(__dirname, 'src/views/products/asic.html'));
});

app.get('/rigs', (req, res) => { // Pagina de registro
     res.status(200).sendFile(path.join(__dirname, '/src/views/products/rigs.html'));
});

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000')});
