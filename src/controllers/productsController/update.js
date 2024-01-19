const { leerJSON, escribirJSON } = require("../../data");

module.exports= (req,res)=>{
    const { name,description,category,sizes,colors,precio,mainImage,descuento} = req.body;
const {id}= req.params ;
    const products= leerJSON('products');
    const productsUpdated= products.map(product => {
if ( product.id == id) {
    product.name = name.trim();
    product.description=description.trim();
    product.mainImage = mainImage ? mainImage[0].filename : product.mainImage ;
    product.images =  [];
    product.category=category;
    product.sizes=sizes;
    product.colors=colors;
    product.precio=precio;
    product.descuento=descuento;
}
return product
    })
    escribirJSON(productsUpdated, 'products');
    return res.redirect('/admin')

} 