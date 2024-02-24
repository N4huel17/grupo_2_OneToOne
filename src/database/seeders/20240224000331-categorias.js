'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
   
      await queryInterface.bulkInsert('categories', [
        {
        name: 'REMERAS',
        createdAt: new Date (),
        updatedAt: new Date (),
      },
      {
        name: 'pantalones',
        createdAt: new Date (),
        updatedAt: new Date (),
      },
      {
        name: 'ABRIGOS',
        createdAt: new Date (),
        updatedAt: new Date (),
      },
      {
        name: 'ACCESORIOS',
        createdAt: new Date (),
        updatedAt: new Date (),
      },
      {
        name: 'CAMISAS',
        createdAt: new Date (),
        updatedAt: new Date (),
      },
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.bulkDelete('categories', null, {});
     
  }
};
