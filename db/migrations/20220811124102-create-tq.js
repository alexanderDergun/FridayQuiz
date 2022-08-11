'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    const attributes =  {
      topic_id: {
        type: Sequelize.INTEGER,
        references:{
          model: 'Topics',
          key: 'id',
        },
        allowNull: false,
      },
      question_id: {
        type: Sequelize.INTEGER,
        references:{
          model: 'Questions',
          key: 'id',
        },
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

    await queryInterface.createTable('Tqs',attributes);
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Tqs');
  }
};