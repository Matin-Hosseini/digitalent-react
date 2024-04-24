module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "Comment",
    {
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
    },
    { tableName: "comments" }
  );

  Comment.associate = (model) => {
    Comment.belongsTo(model.Course, { foreignKey: "resource_id" });
    // Comment.belongsTo(model.Article, { foreignKey: "resource_id" });
    Comment.belongsTo(model.User, { foreignKey: "user_id" });
    Comment.hasMany(model.Like, {foreignKey: "resource_id"})
  };

  return Comment;
};
