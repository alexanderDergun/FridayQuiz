'use strict';

module.exports = {
  async up (queryInterface) {
    const topics = ['Базовый JS', 'Спорт', 'Рандом'];
    await queryInterface.bulkInsert('Topics', topics.map((topic) => ({
      topic,
      createdAt: new Date(),
      updatedAt: new Date(),
    })));
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('Topics');
  }
};
