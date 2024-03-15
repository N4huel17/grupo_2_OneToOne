'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
    await queryInterface.bulkInsert('sizes', [
      {
      name: 'XS',
      createdAt: new Date (),
      updatedAt: new Date (),
    },
    {
      name: 'S',
      createdAt: new Date (),
      updatedAt: new Date (),
    },
    {
      name: 'M',
      createdAt: new Date (),
      updatedAt: new Date (),
    },
    {
      name: 'L',
      createdAt: new Date (),
      updatedAt: new Date (),
    },
    {
      name: 'XL',
      createdAt: new Date (),
      updatedAt: new Date (),
    },
    {
      name: 'XXL',
      createdAt: new Date (),
      updatedAt: new Date (),
    },
    {
      name: 'XXXL',
      createdAt: new Date (),
      updatedAt: new Date (),
    },
   
   
  ], {});
  
},

async down (queryInterface, Sequelize) {
 
    await queryInterface.bulkDelete('sizes', null, {});
   
}
};
