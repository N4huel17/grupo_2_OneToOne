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
    file: 'pantalon3-A.jpg',
    productsId: 3,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'pantalon3-C.jpg',
    productsId: 3,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'pantalon3-B.jpg',
    productsId: 3,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'remera4-A.jpg',
    productsId: 4,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'remera4-B.jpg',
    productsId: 4,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'remera4-C.jpg',
    productsId: 4,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'remera5-A.jpg',
    productsId: 5,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'remera5-B.jpg',
    productsId: 5,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'remera5-C.jpg',
    productsId: 5,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'remera6-A.jpg',
    productsId: 6,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'remera6-B.jpg',
    productsId: 6,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'remera6-C.jpg',
    productsId: 6,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'remera7-A.jpg',
    productsId: 7,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'remera7-B.jpg',
    productsId: 7,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'remera7-C.jpg',
    productsId: 7,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'remera8-A.jpg',
    productsId: 8,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'remera8-B.jpg',
    productsId: 8,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'remera8-C.jpg',
    productsId: 8,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'campera9-A.jpg',
    productsId: 9,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'campera9-B.jpg',
    productsId: 9,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'campera9-C.jpg',
    productsId: 9,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'Buzo10-A.jpg',
    productsId: 10,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'Buzo10-B.jpg',
    productsId: 10,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'Buzo10-C.jpg',
    productsId: 10,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'Buzo11-A.jpg',
    productsId: 11,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'Buzo11-B.jpg',
    productsId: 11,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'Buzo11-C.jpg',
    productsId: 11,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'camisa12-B.jpg',
    productsId: 12,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'camisa12-C.jpg',
    productsId: 12,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'camisa12-D.jpg',
    productsId: 12,
    createdAt: new Date,
    updatedAt: new Date
  },
 
  {
    file: 'camisa13-A.jpg',
    productsId: 13,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'camisa13-B.jpg',
    productsId: 13,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'camisa13-C.jpg',
    productsId: 13,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'camisa14-B.jpg',
    productsId: 14,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'camisa14-C.jpg',
    productsId: 14,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'camisa14-D.jpg',
    productsId: 14,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'GORRA2.jpg',
    productsId: 15,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'GORRA3.jpg',
    productsId: 15,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'GORRA4.jpg',
    productsId: 15,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'CINTO1.JPG',
    productsId: 16,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'CINTO2.JPG',
    productsId: 16,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'CINTO3.JPG',
    productsId: 16,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'pañoleta1.jpg',
    productsId: 17,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'pañoleta2.jpg',
    productsId: 17,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'pañoleta3.jpg',
    productsId: 17,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'pantalon18-A.jpg',
    productsId: 18,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'pantalon18-B.jpg',
    productsId: 18,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    file: 'pantalon18-C.jpg',
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