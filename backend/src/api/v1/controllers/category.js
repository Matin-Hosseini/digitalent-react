const { Category } = require("./../../../models");

const createCategory = async (req, res) => {
  const { name } = req.body;
  const newCategory = await Category.create({ name });

  res.status(201).json({ message: "New Category created!", newCategory });
};


module.exports = {createCategory}