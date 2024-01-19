const { leerJSON, escribirJSON } = require("../../data");
const {existsSync, unlinkSync} = require('fs')

module.exports = (req,res) => {

    const {id} = req.params;
    const products = leerJSON('products');
    const {mainImage} = products.find(product => product.id == id);
    existsSync('public/img/product-img/' + mainImage) && unlinkSync('public/img/product-img/' + mainImage)
   
    const productsFiltered = products.filter(product => product.id != id);

    escribirJSON(productsFiltered, 'products');

    return res.redirect('/admin')


}