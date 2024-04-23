"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable("likes", {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      resource_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      resource_type: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: [["article", "article_comment", "course_comment"]],
        },
      },
      user_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      like_type: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isIn: [[1, -1]],
        },
      },
      date: {
        type: DataTypes.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
