'use strict';

module.exports = {
  async up (queryInterface) {
    const keys = [
      {topic_id: 1, question_id: 1},
      {topic_id: 1, question_id: 2},
      {topic_id: 1, question_id: 3},
      {topic_id: 1, question_id: 4},
      {topic_id: 1, question_id: 5},
      {topic_id: 1, question_id: 6},
      {topic_id: 1, question_id: 7},
      {topic_id: 1, question_id: 8},
      {topic_id: 1, question_id: 9},
      {topic_id: 1, question_id: 10},
      {topic_id: 2, question_id: 11},
      {topic_id: 2, question_id: 12},
      {topic_id: 2, question_id: 13},
      {topic_id: 2, question_id: 14},
      {topic_id: 2, question_id: 15},
      {topic_id: 2, question_id: 16},
      {topic_id: 2, question_id: 17},
      {topic_id: 2, question_id: 18},
      {topic_id: 2, question_id: 19},
      {topic_id: 2, question_id: 20},
      {topic_id: 3, question_id: 21},
    ]
    await queryInterface.bulkInsert('Tqs', keys.map((key) => ({
      ...key,
      createdAt: new Date(),
      updatedAt: new Date(),
    })));
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('Tqs');
  }
};
