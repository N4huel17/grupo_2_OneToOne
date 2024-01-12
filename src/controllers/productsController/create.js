const { leerJSON, escribirJSON } = require("../../data");
const product = require("../../data/product");

module.exports=(req,res)=>{
    const { name,description,category,sizes,colors,precio} = req.body;
const mainImage = req.file ; 
const newProduct= new product(name,description,category,sizes,colors,precio, mainImage)
const products= leerJSON('products');
products.push(newProduct);

escribirJSON(products, 'products')
return res.redirect('/admin')
}

