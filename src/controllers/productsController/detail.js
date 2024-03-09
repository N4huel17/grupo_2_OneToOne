const db = require('../../database/models');

module.exports = async (req, res) => {
    try {
        const productId = req.params.id; 

        const product = await db.products.findOne({
            where: { id: productId },
            include: [
                { model: db.images, as: 'images' },
                { model: db.colors, as: 'colors' }, // Incluir el modelo 'colors'
                { model: db.sizes, as: 'sizes' }    // Incluir el modelo 'sizes'
            ] 
        });

        if (!product) {
            return res.status(404).send('Producto no encontrado');
        }

        return res.render('products/productDetail', { product });
    } catch (error) {
        console.error('Error al recuperar el producto:', error);
        return res.status(500).send('Error interno del servidor');
    }
};