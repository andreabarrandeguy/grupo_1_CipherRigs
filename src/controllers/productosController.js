const controller = {
    detalle: (req, res) => {
        return res.render('./products/productDetail');
    },
    carrito: (req, res) => {
        return res.render('./products/productCart');
    },
    asic: (req, res) => {
        return res.render('./products/asic');
    },
    rigs: (req, res) => {
        return res.render('./products/rigs');
    },
   editCreateProdruct: (req, res) => {
        return res.render('./products/productEdit');
    }
};

module.exports = controller;