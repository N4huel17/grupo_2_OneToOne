const db = require('../../database/models');

module.exports = async (req, res) => {
    try {
        
        const products = await db.products.findAll({
            include: [{ model: db.images, as: 'images' }] 
        });

       
        return res.render('products/abrigos', {
            products
        });
    } catch (error) {
        
        console.error('Error al recuperar productos:', error);
        return res.status(500).send('Error interno del servidor');
    }
};