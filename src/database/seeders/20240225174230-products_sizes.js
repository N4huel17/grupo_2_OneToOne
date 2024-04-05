'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Inserta datos en la tabla products_sizes
    await queryInterface.bulkInsert('products_sizes', [
      { sizesId: 1, productsId: 1, createdAt: new Date(), updatedAt: new Date() },
      { sizesId: 2, productsId: 1, createdAt: new Date(), updatedAt: new Date() },
      { sizesId: 2, productsId: 2, createdAt: new Date(), updatedAt: new Date() },
      // Agrega más filas según sea necesario
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    // Elimina todos los datos de la tabla products_sizes
    await queryInterface.bulkDelete('products_sizes', null, {});
  }
};