'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('comment', [
    {
      "id": 1,
      "title": "Great post",
      "content": "Really great",
      "postId": 1,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "id": 2,
      "title": "This is comment 2",
      "content": "I am also for post 1",
      "postId": 1,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
  ], {})
  
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('comment', null, {});
  }
};
