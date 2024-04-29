const express = require("express");
const categoryController = require("./../../api/v1/controllers/category");

const router = express.Router();

router.get("/", categoryController.getAllCategories);
router.post("/create", categoryController.createCategory);
router.put("/update", categoryController.updateCategory);
router.delete("/delete", categoryController.deleteCategory);

module.exports = router;
