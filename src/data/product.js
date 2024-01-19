const crypto= require('crypto');

function product ( name,description,category,sizes,colors,precio, mainImage){
    this.id = crypto.randomUUID();
    this.name=name;
    this.description=description;
    this.mainImage = mainImage ? mainImage.filename : null ;
    this.images = [];
    this.category=category;
    this.sizes=sizes;
    this.colors=colors;
    this.precio=precio;

}
module.exports = product;