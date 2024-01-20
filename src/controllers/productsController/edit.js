const { leerJSON } = require("../../data");
<<<<<<< HEAD
const categories = require('../../data/products.json')

module.exports = (req,res) => {

    const {id} = req.params;

    const products = leerJSON('products');

    const product = products.find(product => product.id == id);

    return res.render('products/product-edit',{
        ...product,
        categories
    })
}
=======

module.exports= (req,res)=>{
    const {id} = req.params;
    const products= leerJSON('products');
    const product= products.find( product => product.id == id );
    return res.render('products/product-edit',{
        ...product
    })

} 
>>>>>>> G2O-55-CRUD-editar-un-producto-formulario-de-edici-n-de-producto-y-l-gica-de-actualizaci-n.-incluyendo-edici-n-de-im-genes
