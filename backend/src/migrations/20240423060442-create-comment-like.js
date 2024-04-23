"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable("comment_likes", {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      comment_Id: {
        type: DataTypes.UUID,
        allowNull: false,
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
