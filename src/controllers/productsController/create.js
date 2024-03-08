const { validationResult } = require("express-validator");
const fs = require('fs');
const db = require('../../database/models')

module.exports = (req,res) => {
const errors = validationResult(req);
    
const image = req.files.image;
const images = req.files.images;

if (errors.isEmpty()) {
    const {

            name,
            description,
            category,
            sizes,
            colors,
            price,
            descount,
            colorsId,
            sizesId,
            categoryId,
            setionId,       
         } = req.body


         db.products.create({
            name,
            description,
            category,
            sizes,
            colors,
            price ,
            descount,
            image : image ? image[0].filename : null ,
            colorsId,
            sizesId,
            categoryId,
            setionId,
            
            }) 
            .then( product =>{
                console.log(product);
                this.images = images ? images.map(image => image.filename) : [];

                if(images){

                    const imagesDB = images.map(image => {
                        return {
                            file: image.filename,
                            productsId : product.id
                        }
                    }) 

                    db.images.bulkCreate(imagesDB, {
                        validate : true
                    }).then(result => {
                        console.log(result);
                        return res.redirect("/admin");
                    })
                }else {
                    return res.redirect("/admin");
                }


            } )


            .catch(error => console.log(error))
} else {
    if ( image) {
        fs.existsSync(`public/img/${image[0].filename}`) &&
          fs.unlinkSync(`public/img/${image[0].filename}`);
      }
      if(images){
        images.forEach(image => {
            fs.existsSync('public/img/' + image) && fs.unlinkSync('public/img/' + image)
        });
    } 
    db.category.findAll({
        order : [['name']]
    })
    .then(categories => {
        return res.render("products/product-add", {
          errors: errors.mapped(),
          old: req.body,
          categories,
        });
      })
      .catch(error => console.log(error))

      db.colors.findAll({
        order : [['name']]
    })
    .then(colors => {
        return res.render("products/product-add", {
          errors: errors.mapped(),
          old: req.body,
         colors,
        });
      })
      .catch(error => console.log(error))
      
      db.sizes.findAll({
        order : [['name']]
    })
    .then(sizes => {
        return res.render("products/product-add", {
          errors: errors.mapped(),
          old: req.body,
         sizes,
        });
      })
      .catch(error => console.log(error))


    
}



}