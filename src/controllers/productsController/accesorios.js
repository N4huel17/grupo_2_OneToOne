const { leerJSON, escribirJSON } = require("../../data");

module.exports = (req,res)=> {
    
    const products = leerJSON('products');
    return res.render('products/accesorios',{
        products
    })
       


}