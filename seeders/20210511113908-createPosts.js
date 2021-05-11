'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('post', [
    {
      "id": 1,
      "title": "This is post one",
      "body": "I am a post",
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "id": 2,
      "title": "Why dogs are so great",
      "body": "Because I said so",
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
  ], {})
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
