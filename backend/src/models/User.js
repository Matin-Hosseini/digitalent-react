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
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: [["USER", "ADMIN", "TEACHER", "AUTHOR", "SUPPORTER"]],
        },
        defaultValue: "USER",
      },
      cover: {
        type: DataTypes.STRING,
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
    return this.get()
  };

  User.beforeCreate(async (user, options) => {
    const hashedPassword = await hashPassword(user.password);
    user.password = hashedPassword;

    if ((await User.count()) === 0) user.role = "ADMIN";
  });

  User.association = (model) => {
    User.hasMany(model.Comment);
    User.hasMany(model.Like, { foreignKey: "user_id" });
  };

  return User;
};
