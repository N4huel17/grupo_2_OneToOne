const db = require('../../database/models');

module.exports = async (req, res) => {
    try {
        // Consulta todos los productos desde la base de datos utilizando el modelo db.products
        const products = await db.products.findAll({
            include: [{ model: db.images, as: 'images' }] // Especifica el alias 'imagenes'
        });

        // Renderiza la vista con los productos recuperados de la base de datos
        return res.render('products/accesorios', {
            products
        });
    } catch (error) {
        // Maneja cualquier error que ocurra durante la consulta
        console.error('Error al recuperar productos:', error);
        return res.status(500).send('Error interno del servidor');
    }
};