
const {existsSync, unlinkSync} = require('fs')
const db= require('../../database/models')

module.exports = (req,res) => {

    const {id} = req.params;
db.products.findByPk(id, {
    include: ['images']
})
.then( ({image,images})=> {
    existsSync("public/images/" + image) &&
    unlinkSync("public/images/" + image);

  images.forEach((image) => {
    existsSync("public/images/" + image.file) &&
      unlinkSync("public/images/" + image.file);
  });
   

    db.images.destroy({
        where : {
            productsId : id
        }
    }) .then(()=> {
        db.products.destroy({
            where : {
                id
                }
        })
    })
.then(()=> {

    return res.redirect('/admin')
})



})
.catch(error => console.log(error))


}