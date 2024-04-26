module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define(
    "Course",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: "false",
        defaultValue: DataTypes.UUIDV4,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
      },
      teacher: {
        type: DataTypes.UUID,
        allow: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      time: {
        type: DataTypes.TIME,
        defaultValue: "00:00",
      },
      students: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      rating: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
        validate: {
          min: 0,
          max: 5,
        },
      },
      completed_percent: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        validate: {
          min: 0,
          max: 100,
        },
      },
      certificate: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      short_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      category_id: {
        type: DataTypes.UUID,
      },
      createdAt: {
        type: DataTypes.DATE,
      },
      updatedAt: {
        type: DataTypes.DATE,
      },
    },
    { tableName: "courses" }
  );

  Course.associate = (model) => {
    Course.belongsTo(model.Category, { foreignKey: "category_id" });
    Course.hasMany(model.Comment, { foreignKey: "course_id" });
    Course.hasMany(model.Session, { foreignKey: "course_id" });
  };

  return Course;
};
