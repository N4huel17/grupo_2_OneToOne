const db = require('../../database/models');

module.exports = async (req, res) => {
    try {
        const [categories, colors, sizes] = await Promise.all([
            db.category.findAll({ order: ['name'] }),
            db.colors.findAll({ order: ['name'] }),
            db.sizes.findAll({ order: ['name'] })
        ]);
        
        return res.render('products/product-add', { categories, colors, sizes });
    } catch (error) {
        console.error('Error al obtener datos:', error);
        return res.status(500).send('Error interno del servidor');
    }
};