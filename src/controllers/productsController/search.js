const db = require('../../database/models');
const { Op } = require('sequelize');

//const { leerJSON } = require('../../data')
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");



module.exports = (req,res) => {

    const {keywords} = req.query;
    if (keywords.length > 0) {
        db.products.findAll({
            where: {
                name: {
                    [Op.substring]: keywords
                }
            }
        })
            .then(products => {
         const  category = db.category.findAll({})
                return res.render('products/products', {
                    products,
                    category,
                    keywords,
                    toThousand
                })
            })
            .catch(error=>console.log(error))
    } else {
        const oferta = db.Product.findAll({
            where: {
                categoryId: 1
            }
        })
        const destacado = db.Product.findAll({
            where: {
                categoryId: 2
            }
        })

        Promise.all([oferta, destacado])
            .then(([oferta, destacado]) => {
                return res.render('index', {
                    oferta,
                    destacado,
                    toThousand
                })

                    
            })
            .catch(error=>console.log(error))
    }

    

}