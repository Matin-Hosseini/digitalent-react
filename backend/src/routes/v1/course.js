const express = require("express")
const courseController = require("./../../api/v1/controllers/course")

const router = express.Router()

router.post("/create", courseController.createCourse)

module.exports = router