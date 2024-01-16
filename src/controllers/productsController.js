
module.exports={
    add: (req,res)=> {
return res.render('products/product-add')
    },
    detail: (req,res)=> {
        return res.render('products/productDetail')
    },
    edit : (req,res)=>{
        return res.render('products/product-edit')
    },
    remove: (req,res)=>{
        return res.render()
    }
}