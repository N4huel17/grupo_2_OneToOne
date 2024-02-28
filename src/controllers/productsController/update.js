const { validationResult } = require("express-validator");
const { existsSync, unlinkSync } = require("fs");
const db = require('../../database/models')

module.exports = (req, res) => {



    const image = req.files.image;
    const images = req.files.images;


    const {

        name,
        description,
        category,
        sizes,
        colors,
        price,
        descount,
        categoryId,
        setionId,
    } = req.body;

    const { id } = req.params;

    const errors = validationResult(req);


    if (errors.isEmpty()) {
        db.products.findByPk(id, {
            include: ['images']
        }).then(() => {
            if (image) {
                existsSync("public/img/" + products.image) &&
                    unlinkSync("public/img/" + products.image)
            }
            db.products.update({
                name,
                description,
                category,
                sizes,
                colors,
                price,
                image: image ? image[0].filename : image,
                descount,
                categoryId,
                setionId,

            },
                {
                    where: {
                        id,
                    },
                })
                .then(() => {
                    if (images) {
                        products.images.forEach((image) => {
                            existsSync("public/img/" + image.file) &&
                                unlinkSync("public/img/" + image.file);
                        });

                        db.image.destroy({
                            where: {
                                restaurantId: id
                            }
                        }).then(() => {
                            const imagesDB = images.map(image => {
                                return {
                                    file: image.filename,
                                    restaurantId: products.id
                                }
                            })

                            db.image.bulkCreate(imagesDB, {
                                validate: true
                            }).then(result => {
                                console.log(result);
                                return res.redirect("/admin");
                            })
                        })
                    } 
                });

        })


            .then(product => {
                console.log(product);
                this.images = images ? images.map(image => image.filename) : [];

                if (images) {

                    const imagesDB = images.map(image => {
                        return {
                            file: image.filename,
                            productsId: product.id
                        }
                    })

                    db.images.bulkCreate(imagesDB, {
                        validate: true
                    }).then(result => {
                        console.log(result);
                        return res.redirect("/admin");
                    })
                } else {
                    return res.redirect("/admin");
                }


            }).catch(error => console.log(error))


            
    } else {
        image &&
          existsSync("public/img/" + image.filename) &&
          unlinkSync("public/img/" + image.filename);
    
        if (images) {
          images.forEach((image) => {
            existsSync("public/img/" + image) &&
              unlinkSync("public/img/" + image);
          });
        }
      
    
        const products = db.products.findByPk(id, {
            include : ['category','image']
        })
        const categories = db.category.findAll({
            order: [['name']]
        })
            Promise.all([products, categories])
            .then(([products, categories]) => {
    
                return res.render('products/product-edit',{
                    ...products.dataValues,
                    categories,
                    errors : errors.mapped()
                })
            })
            .catch(error => console.log(error))
    
      }
    };
    








