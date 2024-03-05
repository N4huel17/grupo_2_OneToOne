const db= require('../../database/models');

module.exports = (req,res)=> {
    db.category.findAll({
        order : ['name']
    })
        .then(categories => {
            return res.render('products/product-add',{
                categories
            })
        })
        .catch(error => console.log(error))
  
        }