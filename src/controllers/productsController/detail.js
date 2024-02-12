const { leerJSON, escribirJSON } = require("../../data");

module.exports = (req, res) => {
    const productId = req.params.id; // Obtén el ID del producto de los parámetros de la URL
    const products = leerJSON('products');
    const product = products.find(product => product.id === productId);
    if (!product) {
        return res.status(404).send('Producto no encontrado');
    }
    res.render('products/productDetail', { product }); // Renderiza la vista productDetail y pasa el producto encontrado
};