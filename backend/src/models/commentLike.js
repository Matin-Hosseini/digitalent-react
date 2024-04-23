module.exports = (sequelize, DataTypes) => {
  const CommentLike = sequelize.define(
    "CommentLike",
    {
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
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      },
    },
    {
      tableName: "comment_likes",
    }
  );

  CommentLike.associate = (model) => {
    CommentLike.belongsTo(model.Comment, { foreignKey: "comment_id" });
    CommentLike.belongsTo(model.User, { foreignKey: "user_id" });
  };

  return CommentLike;
};
