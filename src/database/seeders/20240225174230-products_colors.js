'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Inserta datos en la tabla products_colors
    await queryInterface.bulkInsert('products_colors', [
      { colorsId: 1, productsId: 1, createdAt: new Date(), updatedAt: new Date() },
      { colorsId: 2, productsId: 1, createdAt: new Date(), updatedAt: new Date() },
      { colorsId: 2, productsId: 2, createdAt: new Date(), updatedAt: new Date() },
      // Agrega más filas según sea necesario
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    // Elimina todos los datos de la tabla products_colors
    await queryInterface.bulkDelete('products_colors', null, {});
  }
};