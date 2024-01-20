const { leerJSON, escribirJSON } = require("../../data");
const product = require("../../data/product");

module.exports = (req,res) => {
const { name,description,category,sizes,colors,precio} = req.body;
const mainImage = req.files.mainImage;
const images = req.files.images;
const newProduct= new product(name,description,category,sizes,colors,precio,mainImage,images)
const products= leerJSON('products');
products.push(newProduct);

escribirJSON(products, 'products')
return res.redirect('/admin')
}

