const { Op } = require("sequelize");
const { Comment, User } = require("./../../../models");
const asyncHandler = require("express-async-handler");

/*
 * registers new user and saves token to cookie
 * /register
 * public
 */

const register = async (req, res) => {
  res.status(200).json({ msg: "created" });
};

const getUserComments = async (req, res) => {
  const userComments = await Comment.findAll({
    where: {
      creator: req.query.userId,
    },
  });

  res.status(200).json({ userComments });
};

/*
 * updates user info
 * /user/info
 * private(admin, supporter, user)
 */
const changeUserInfo = asyncHandler(async (req, res) => {
  const { username, email } = req.body;

  if (!["USER", "ADMIN", "SUPPORTER"].includes(req.user.role))
    return res.status(403).json({ error: "This route is private" });

  const user = await User.findOne({
    where: {
      id: req.user.id,
    },
  });

  if (username !== user.username || email !== user.email) {
    const SimilarUser = await User.findOne({
      where: {
        [Op.or]: [{ username }, { email }],
      },
    });

    if (SimilarUser)
      return res
        .status(400)
        .json({ error: "User with this username or email alread exists" });
  }

  user.set(req.body);
  await user.save();

  res.status(200).json({ msg: "User updated!" });
});

module.exports = { register, getUserComments, changeUserInfo };
