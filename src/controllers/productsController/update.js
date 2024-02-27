const { leerJSON, escribirJSON } = require("../../data");

module.exports= (req,res)=>{
    const { name,description,category,sizes,colors,price,descount} = req.body;
const {id}= req.params ;
const image = req.files.image;
    const images = req.files.images;
    const products= leerJSON('products');
    const productsUpdated= products.map(product => {
if ( product.id == id) {
    product.name = name.trim();
    product.description=description.trim();
    product.image = image ? image[0].filename : product.image;
    product.images = images ? images.map(image => image.filename) : product.images;
    product.category=category;
    product.sizes=sizes;
    product.colors=colors;
    product.price=price;
    product.descount=descount;
}
return product
    })
    escribirJSON(productsUpdated, 'products');
    return res.redirect('/admin')

} 