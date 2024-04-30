const { Newsletter } = require("./../../../models");
const asyncHandler = require("express-async-handler");

/*
 * inserts user email
 * /newsletter/create
 * public
 */
const create = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const newsLetterEmail = await Newsletter.findOne({
    where: { email },
  });

  if (newsLetterEmail)
    return res.status(400).json({ error: "Email already exists" });

  await Newsletter.create({ email });

  res.status(201).json({ msg: "New newsletter email created" });
});

/*
 * deletes existnig email
 * /newsletter/remove?id=(UUID)
 * private(admin)
 */
const remove = asyncHandler(async (req, res) => {
  if (req.user.role !== "ADMIN")
    return res.status(403).json({ error: "this route is protected" });

  const { id } = req.query;

  await Newsletter.destroy({
    where: { id },
  });

  res.status(200).json({ msg: "newsletter email removed", id });
});

module.exports = { create, remove };
