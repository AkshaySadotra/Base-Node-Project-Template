'use strict';
const {Op} = require('sequelize')
// const{Airplanes} = require('../models/airplane')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
    await queryInterface.bulkInsert('airplanes',[
      {
        modelNumber:"airbus340",
        capacity:150,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNumber:"boeing777",
        capacity:450,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
   
    await queryInterface.bulkDelete('airplanes',{[Op.or]: [{modelNumber:'boeing777'}, {modelNumber:'airbus340'}]});
  }
};
