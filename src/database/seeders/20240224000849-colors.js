'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
    await queryInterface.bulkInsert('colors', [
      {
      name: 'rojo',
      createdAt: new Date (),
      updatedAt: new Date (),
    },
    {
      name: 'celeste',
      createdAt: new Date (),
      updatedAt: new Date (),
    },
    {
      name: 'blanco',
      createdAt: new Date (),
      updatedAt: new Date (),
    },
    {
      name: 'negro',
      createdAt: new Date (),
      updatedAt: new Date (),
    },
    {
      name: 'azul',
      createdAt: new Date (),
      updatedAt: new Date (),
    },
    {
      name: 'gris',
      createdAt: new Date (),
      updatedAt: new Date (),
    },
    {
      name: 'amarillo',
      createdAt: new Date (),
      updatedAt: new Date (),
    },
    {
      name: 'verde',
      createdAt: new Date (),
      updatedAt: new Date (),
    },
    {
      name: 'violeta',
      createdAt: new Date (),
      updatedAt: new Date (),
    },
    {
      name: 'marron',
      createdAt: new Date (),
      updatedAt: new Date (),
    },
  ], {});
  
},

async down (queryInterface, Sequelize) {
 
    await queryInterface.bulkDelete('colors', null, {});
   
}
};
