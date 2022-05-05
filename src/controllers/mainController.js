const controller = {
    index: (req, res) => {
        return res.render('index'); 
    },
    contacto: (req, res) => {
        return res.render('contacto');
    },
    nosotros: (req, res) => {
        return res.render('nosotros');
    }
};

module.exports = controller;