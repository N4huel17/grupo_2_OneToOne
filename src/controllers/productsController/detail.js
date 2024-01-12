const product = require("../../data/product")


module.exports = (req,res)=> {
    return res.render('products/productDetail',{
        ...product 
    })
}