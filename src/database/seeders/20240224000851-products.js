'use strict';
const productJSON = require('../../data/products.json')

const productDB = productJSON.map((products, index) => {
  return {
    name: products.name,
    description: products.description,
    price: parseInt(products.price),
    descount: 0,
    image: products.image,
    colorsId: products.colors == "rojo" ? 1 : products.colors == "celeste" ? 2 : products.colors == "blanco" ? 3 : products.colors == "negro" ? 4 : products.colors== "azul" ?5:products.colors== "gris" ?6: products.colors== "amarillo" ?7:products.colors== "verde" ?8:products.colors== "violeta" ?9:products.colors== "marron" ?10: 0 ,
    sizesId: products.sizes == "XS" ? 1 :products.sizes == "S" ? 2 :products.sizes == "M" ? 3:products.sizes == "L" ? 4 :products.sizes == "XL" ? 5 : products.sizes == "XXL" ? 6 :products.sizes == "XXXL" ? 7 :0,
    categoryId: products.category == "REMERAS" ? 1 : products.category == "PANTALONES" ? 2 : products.category == "ABRIGOS" ? 3 : products.category == "ACCESORIOS" ? 4 : products.category == "CAMISAS" ? 5 : 1,
    setionId: products.category == "REMERAS" ? 1 : products.category == "PANTALONES" ? 2 : products.category == "ABRIGOS" ? 3 : products.category == "ACCESORIOS" ? 4 : products.category == "CAMISAS" ? 5 : 1,

    createdAt: new Date(),
    updatedAt: new Date(),
  }
})




/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {


    await queryInterface.bulkInsert(
      'products',
      productDB,
      {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('products', null, {});

  }
};
