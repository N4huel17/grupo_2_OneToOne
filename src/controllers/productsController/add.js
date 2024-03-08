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


        db.colors.findAll({
            order : ['name']
        })
            .then(colors => {
                return res.render('products/product-add',{
                    colors
                })
            })
            .catch(error => console.log(error))


            db.sizes.findAll({
                order : ['name']
            })
                .then(sizes => {
                    return res.render('products/product-add',{
                        sizes
                    })
                })
                .catch(error => console.log(error))
  
        }