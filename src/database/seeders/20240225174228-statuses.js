module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "statuses",
      [
        {
          name: "Pendiente",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Aprobado",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Rechazado",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Anulado",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("statuses", null, {});
  },
};