const crypto= require('crypto');

function product( name,description,category,sizes,colors,precio, mainImage,descuento,images){
    this.id = crypto.randomUUID();
    this.name = name.trim();
    this.description=description.trim();
    this.category=category;
    this.sizes=sizes;
    this.colors=colors;
    this.precio=precio;
    this.mainImage = mainImage ? mainImage[0].filename : null ;
    this.descuento=descuento;
    this.images = images ? images.map(image => image.filename) : [];;

    

}
module.exports = product;