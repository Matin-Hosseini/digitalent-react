const express = require("express");
const courseController = require("./../../api/v1/controllers/course");

const router = express.Router();

router.post("/create", courseController.createCourse);
router.get("/course", courseController.getCourseInfo);
router.put("/update", courseController.updateCourse);
router.delete("", courseController.deleteCourse)

module.exports = router;
