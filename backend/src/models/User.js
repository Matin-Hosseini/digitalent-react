const hashPassword = require("./../utils/hashPassword");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      name: DataTypes.STRING,
      phone: DataTypes.STRING,
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
      },
      updatedAt: {
        type: DataTypes.DATE,
      },
    },
    {
      tableName: "users",
    }
  );

  User.prototype.toJSON = function () {
    //removing password to store it in jwt
    delete this.get().password;
    return JSON.stringify(this.get());
  };

  User.beforeCreate(async (user, options) => {
    const hashedPassword = await hashPassword(user.password);
    user.password = hashedPassword;
  });

  User.association = (model) => {
    User.hasMany(model.Comment);
    User.hasMany(model.Like, { foreignKey: "user_id" });
  };

  return User;
};
