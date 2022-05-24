const { randomUUID } = require('crypto');
const { json } = require('express');
const fs=require('fs');
const path= require('path');




const controller = {

    asic: (req, res) => {
        return res.render('./products/asic');
    },
    rigs: (req, res) => {
        return res.render('./products/rigs');
    },
    carrito: (req, res) => {
        return res.render('./products/productCart');
    },
    editCreateProdruct: (req, res) => {
        return res.render('./products/productEdit');
    },
    guardarProducto: (req,res) =>{
   
        
        let products = JSON.parse(fs.readFileSync('./src/data/products.json', 'utf-8'));
        
        let newProducts = { 
            id:randomUUID(),
            imagen:req.body.imagen,
            titulo:req.body.titulo,
            precio:req.body.precio,
            especificaciones:req.body.especificaciones,
            funcion:req.body.funcion
        }
       products.push(newProducts);
       products = JSON.stringify(products)
         fs.appendFileSync('./src/data/products.json',newProducts,'utf-8')
         res.render('./products/productDetail')
         
        
    },
    detalle: (req, res) => {
        return res.render('./products/productDetail');
    },
 
};

module.exports = controller;


 //products (GET)
//Listado de productos
//products/create (GET)LIIIIISTOOOOOOOO
//Formulario de creación de productos
 //products/:id (GET)
//Detalle de un producto particular
 //products (POST)
//Acción de creación (a donde se envía el formulario)
 //products/:id/edit (GET)
//Formulario de edición de productos
//products/:id (PUT)
//Acción de edición (a donde se envía el formulario):
 //products/:id (DELETE)
//Acción de borrado