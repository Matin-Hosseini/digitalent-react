module.exports = (sequelize, DataTypes) => {
  const CommentLike = sequelize.define(
    "Like",
    {
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
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      },
    },
    {
      tableName: "likes",
    }
  );

  CommentLike.associate = (model) => {
    CommentLike.belongsTo(model.Comment, { foreignKey: "comment_id" });
    CommentLike.belongsTo(model.User, { foreignKey: "user_id" });
  };

  return CommentLike;
};
