const { Comment, Course, User } = require("./../../../models");

const createComment = async (req, res) => {
  const newComment = await Comment.create(req.body);

  res.status(201).json({ msg: "New comment created", newComment });
};

const getComments = async (req, res) => {
  const comments = await Comment.findAll({
    include: [
      { model: Course },
      { model: User, },
    ],
  });

  res.status(200).json({ comments });
};

module.exports = { createComment, getComments };
 