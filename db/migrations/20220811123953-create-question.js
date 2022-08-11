'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    const attributes = {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      question: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      var1: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      var2: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      var3: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      var4: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    };

    await queryInterface.createTable('Questions', attributes);
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Questions');
  }
};