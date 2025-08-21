'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('playerscores', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        default:Sequelize.UUID
      },
      goals: {
        type: Sequelize.INTEGER
      },
      assist: {
        type: Sequelize.INTEGER
      },
      redCard: {
        type: Sequelize.INTEGER
      },
      yellowCard: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('playerscores');
  }
};