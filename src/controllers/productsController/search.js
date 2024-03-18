const db = require('../../database/models');
const { Op } = require('sequelize');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = (req, res) => {
    const { keywords } = req.query;
    if (keywords && keywords.length > 0) {
        db.products.findAll({
            where: {
                name: {
                    [Op.substring]: keywords
                }
            }
        })
        .then(products => {
            db.category.findAll({})
            .then(category => {
                return res.render('products/products', {
                    products,
                    category: category.name, 
                    keywords,
                    toThousand
                });
            })
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
  
    }
}; 