const { Course } = require("./../../../models");

const createCourse = async (req, res) => {
  console.log("inside course controller");
  const newCourse = await Course.create(req.body);

  res.status(201).json({ message: "New Course Created", newCourse});
};

module.exports = { createCourse };
