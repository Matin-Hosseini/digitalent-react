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
    await queryInterface.createTable("comments", {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: "false",
        defaultValue: DataTypes.UUIDV4,
      },
      text: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      resource_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      resource_type: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: [["course", "article"]],
        },
      },
      user_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
      },
      updatedAt: {
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
    await queryInterface.dropTable("comments");
  },
};
