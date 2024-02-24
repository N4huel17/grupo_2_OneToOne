'use strict';

const usersJSON = require('../../data/users.json')

const usersDB = usersJSON.map( (users, index) => {
  return {
    name : users.name,
    surname : users.surname,
    email : users.email,
    password: users.password,
    roleId:  users.role,
    createdAt: new Date(),
    updatedAt: new Date(),
  }
})


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('users', 
      usersDB,
       
        {});
    
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.bulkDelete('users', null, {});
     
  }
};