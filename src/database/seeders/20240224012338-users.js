'use strict';

const usersJSON = require('../../data/users.json')

const users = usersJSON.map( (users, index) => {
  return {
    name : users.name,
    surname : users.surname,
    email : users.email,
    password: users.password,
    roleId: users.role === 'admin' ? 1 : users.role === 'user' ? 2 : null,
    createdAt: new Date(),
    updatedAt: new Date(),
  }
})


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('users', 
      users,
       
        {});
    
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.bulkDelete('users', null, {});
     
  }
};