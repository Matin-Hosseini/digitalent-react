const { User } = require("./../models");
const { generateToken } = require("./../../../utils/generateToken");
const { generateCookie } = require("./../../../utils/cookie");
const { Op } = require("sequelize");

/*
 * registers new user and stores token to cookie
 * /register
 * public
 */

const register = async (req, res) => {
  const newUser = await User.create(req.body);
  const token = generateToken(newUser.id);

  generateCookie(res, "user", token);

  res.status(201).json({ message: "New user created" });
};

/*
 * loggs user in and stores token in cookie
 * /register
 * public
 */

const login = async (req, res) => {
  const { identifier, password } = req.body;

  const user = await User.findOne({
    where: {
      [Op.or]: [{ username: identifier }, { email: identifier }],
    },
  });

  if (!user) return res.status(404).send({ error: "User not found" });

  const token = generateToken(user.id);
  generateCookie(res, "user", token);

  res.send({ msg: "user logged in" });
};

const test = async (req, res) => {
  console.log(req.user);

  res.status(200).json({ msg: "inside auth controller" });
};

module.exports = { register, login, test };
