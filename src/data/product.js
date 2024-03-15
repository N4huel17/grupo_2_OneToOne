const crypto= require('crypto');

function product( name,description,category,sizes,colors,price, image,images,descount){
    this.id = crypto.randomUUID();
    this.name = name.trim();
    this.description=description.trim();
    this.category=category;
    this.sizes=sizes;
    this.colors=colors;
    this.price=price;
    this.image= image ? image[0].filename :null;
    this.descount=descount;
    this.images = images ? images.map(image => image.filename) : [];;
    

    

}
module.exports = product;