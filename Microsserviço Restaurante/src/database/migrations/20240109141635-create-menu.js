'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('menu', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      dish_name: {
        type: Sequelize.STRING(60),
        allowNull: false
      },
      description: {
        type: Sequelize.STRING(400),
        allowNull: true,
      },
      value: {
        type: Sequelize.DECIMAL(8, 2),
        allowNull: false
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface('menu');
  }
};
