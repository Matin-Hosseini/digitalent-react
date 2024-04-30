module.exports = (sequelize, DataTypes) => {
  const Newsletter = sequelize.define(
    "Newsletter",
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    { tableName: "newsletter" }
  );

  return Newsletter;
};
