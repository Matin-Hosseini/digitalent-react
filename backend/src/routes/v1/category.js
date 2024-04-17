const express = require("express");
const categoryController = require("./../../api/v1/controllers/category");

const router = express.Router();

router.post("/create", categoryController.createCategory);

module.exports = router
