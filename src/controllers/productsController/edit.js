const db= require('../../database/models')



module.exports= (req,res)=>{
    const {id} = req.params;
    const products = db.products.findByPk(id, {
        include: ['category']
    })
    const categories = db.category.findAll({
        order: [['name']]
    })
    Promise.all([products, categories])
    .then(([products, categories]) => {
        return res.render('products/product-edit',{
            ...products.dataValues,
            categories
        })
    })
    .catch( error => console.log( error))

} 
