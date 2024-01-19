const crypto= require('crypto');

function product( name,description,category,sizes,colors,precio, mainImage,descuento){
    this.id = crypto.randomUUID();
    this.name = name.trim();
    this.description=description.trim();
    this.mainImage = mainImage ? mainImage.filename : null ;
    this.images = [];
    this.category=category;
    this.sizes=sizes;
    this.colors=colors;
    this.precio=precio;
    this.descuento=descuento;

}
module.exports = product;