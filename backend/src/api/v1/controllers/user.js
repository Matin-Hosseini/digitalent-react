const { Comment } = require("./../../../models");

/*
 * registers new user and saves token to cookie
 * /register
 * public
 */

const { User } = require("./../../../models");

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

module.exports = { register, getUserComments };
