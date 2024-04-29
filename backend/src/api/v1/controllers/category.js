const { Category } = require("./../../../models");

const asyncHandler = require("express-async-handler");

/*
 * Returns all of the categories
 * /category
 * public
 */
const getAllCategories = asyncHandler(async (req, res) => {
  const categories = await Category.findAll();
  return res.status(200).json(categories);
});

/*
 * Inserts a new category into database
 * /category/create
 * private(admin)
 */
const createCategory = asyncHandler(async (req, res) => {
  const { name } = req.body;

  const category = await Category.findOne({
    where: {
      name,
    },
  });

  if (category) return res.status(400).json({ err: "Category already exists" });

  await Category.create({ name });

  res.status(201).json({ message: "New Category created!" });
});

/*
 * Updates the existing category
 * /category/update?categoryId=(UUID)
 * private(admin)
 */
const updateCategory = asyncHandler(async (req, res) => {
  const category = await Category.findOne({
    where: {
      id: req.query.categoryId,
    },
  });

  if (!category) return res.status(404).json({ err: "Category not found" });

  category.name = req.body.name;
  await category.save();
  res.status(200).json({ msg: "category updated successfully" });
});

/*
 * Deletes the existing category
 * /category/delete?categoryId=(UUID)
 * private(admin)
 */
const deleteCategory = asyncHandler(async (req, res) => {
  await Category.destroy({
    where: {
      id: req.query.categoryId,
    },
  });

  res.status(200).json({ msg: "Category removed successfully" });
});

module.exports = {
  createCategory,
  updateCategory,
  deleteCategory,
  getAllCategories,
};
