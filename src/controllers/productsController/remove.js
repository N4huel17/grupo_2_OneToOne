const { existsSync, unlinkSync } = require('fs');
const db = require('../../database/models');

module.exports = (req, res) => {
    const { id } = req.params;
    db.products.findByPk(id, {
        include: ['images']
    })
    .then(product => {
        if (!product) {
            return res.status(404).send('Product not found');
        }

        const { image, images } = product;

        existsSync("public/img/" + image) && unlinkSync("public/img/" + image);

        images.forEach((img) => {
            existsSync("public/img/" + img.file) && unlinkSync("public/img/" + img.file);
        });

        db.images.destroy({
            where: {
                productsId: id
            }
        }).then(() => {
            db.products.destroy({
                where: {
                    id
                }
            }).then(() => {
                return res.redirect('/admin');
            }).catch(error => {
                console.log(error);
                return res.status(500).send('Internal Server Error');
            });
        }).catch(error => {
            console.log(error);
            return res.status(500).send('Internal Server Error');
        });
    })
    .catch(error => {
        console.log(error);
        return res.status(500).send('Internal Server Error');
    });
};