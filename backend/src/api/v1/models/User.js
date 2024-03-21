module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    // id: {
    //   primaryKey: true,
    //   allowNull: false,
    //   type: DataTypes.UUID,
    //   defaultValue: DataTypes.UUIDV4
    // },
    username: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  });

  return User;
};
