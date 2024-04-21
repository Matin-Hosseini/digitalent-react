const { Course } = require("./../../../models");

const createCourse = async (req, res) => {
  console.log("inside course controller");
  const newCourse = await Course.create(req.body);

  res.status(201).json({ message: "New Course Created" });
};

const getCourseInfo = async (req, res) => {
  const course = await Course.findOne({
    where: {
      short_name: req.query.shortName,
    },
  });

  res.status(200).json(course);
};

const updateCourse = async (req, res) => {
  const course = await Course.findOne({
    where: {
      short_name: req.query.shortName,
    },
  });

  await course.update(req.body);
  await course.save();

  res.status(200).json(course);
};

const deleteCourse = async (req, res) => {
  await Course.destroy({
    where: {
      short_name: req.query.shortName,
    },
  });

  res.status(200).json({ msg: "Course deleted successfully!" });
};

module.exports = { createCourse, getCourseInfo, updateCourse, deleteCourse };
