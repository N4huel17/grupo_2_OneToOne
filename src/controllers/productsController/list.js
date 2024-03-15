const db = require('../../database/models');

module.exports = async (req, res) => {
    try {
        // Consulta todos los productos desde la base de datos utilizando el modelo db.products
        const {name} = await db.category.findByPk(req.query.categoria)
     
        const products = await db.products.findAll({
            where : {
                categoryId : req.query.categoria
            },
            
            include: [
                { model: db.images, as: 'images' },
                { model: db.colors, as: 'colors' },
                { model: db.sizes, as: 'sizes' }
            ],// Especifica el alias 'imagenes'
            
        });

        // Renderiza la vista con los productos recuperados de la base de datos
        return res.render('products/products', {
            products,
            category : name.toUpperCase()
        });
    } catch (error) {
        // Maneja cualquier error que ocurra durante la consulta
        console.error('Error al recuperar productos:', error);
        return res.status(500).send('Error interno del servidor');
    }
};