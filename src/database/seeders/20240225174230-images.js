'use strict';

var images = [
  {
    file: 'pantalon1-b.jpg',
    productsId: 1,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'pantalon1-c.jpg',
    productsId: 1,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'pantalon1-d.jpg',
    productsId: 1,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'remera2-A.jpg',
    productsId: 2,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'remera2-B.jpg',
    productsId: 2,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'remera2-C.jpg',
    productsId: 2,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: '1709928177922_products.jpg',
    productsId: 3,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: '1709928177923_products.jpg',
    productsId: 3,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: '1709928177923_products.jpg',
    productsId: 3,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: '1709928354033_products.jpg',
    productsId: 4,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: '1709928354034_products.jpg',
    productsId: 4,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: '1709928354034_products.jpg',
    productsId: 4,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: '1709928585078_products.jpg',
    productsId: 5,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: '1709928585078_products.jpg',
    productsId: 5,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: '1709928177923_products.jpg',
    productsId: 5,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: '1709928774400_products.jpg',
    productsId: 6,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: '1709928354033_products.jpg',
    productsId: 6,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: '1709928354033_products.jpg',
    productsId: 6,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: '1709928921625_products.jpg',
    productsId: 7,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: '1709928921626_products.jpg',
    productsId: 7,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: '1709928177923_products.jpg',
    productsId: 7,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: '1709929045728_products.jpg',
    productsId: 8,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: '1709929045729_products.jpg',
    productsId: 8,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: '1709928921625_products.jpg',
    productsId: 8,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: '1709929212039_products.jpg',
    productsId: 9,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'noImagen.jpg',
    productsId: 9,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'noImagen.jpg',
    productsId: 9,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: '1709929415103_products.jpg',
    productsId: 10,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: '1709929415104_products.jpg',
    productsId: 10,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: '1709928921625_products.jpg',
    productsId: 10,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: '1709929608724_products.jpg',
    productsId: 11,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: '1709929608726_products.jpg',
    productsId: 11,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: '1709929608726_products.jpg',
    productsId: 11,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: '1709929802175_products.jpg',
    productsId: 12,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: '1709929802176_products.jpg',
    productsId: 12,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: '1709929802177_products.jpg',
    productsId: 12,
    createdAt: new Date,
    updatedAt: new Date
  },
 
  {
    file: '1709929916710_products.jpg',
    productsId: 13,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: '1709929916713_products.jpg',
    productsId: 13,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: '1709929916712_products.jpg',
    productsId: 13,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: '1709930113103_products.jpg',
    productsId: 14,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: '1709929916713_products.jpg',
    productsId: 14,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: '1709929916713_products.jpg',
    productsId: 14,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: '1709930304279_products.jpg',
    productsId: 15,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: '1709930304280_products.jpg',
    productsId: 15,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: '1709930304280_products.jpg',
    productsId: 15,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: '1709936132033_products.jpg',
    productsId: 16,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: '1709936132034_products.jpg',
    productsId: 16,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: '1709936132035_products.jpg',
    productsId: 16,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: '1709930469725_products.jpg',
    productsId: 17,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: '1709930469726_products.jpg',
    productsId: 17,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: '1709930469727_products.jpg',
    productsId: 17,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: '1709930604310_products.jpg',
    productsId: 18,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: '1709930604311_products.jpg',
    productsId: 18,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: '1709930604311_products.jpg',
    productsId: 18,
    createdAt: new Date,
    updatedAt: new Date
  },
 
]


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('images', images, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('images', null, {});
  }
};