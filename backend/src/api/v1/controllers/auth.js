const { User } = require("./../../../models");
const { generateToken } = require("./../../../utils/generateToken");
const { generateCookie } = require("./../../../utils/cookie");
const { Op } = require("sequelize");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");

/*
 * registers new user and stores token to cookie
 * /register
 * public
 */
const register = asyncHandler(async (req, res) => {
  const newUser = await User.create(req.body);
  const token = generateToken(newUser.toJSON());

  generateCookie(res, "token", token);

  res.status(201).json({ message: "New user created!" });
});

/*
 * loggs user in and stores token in cookie
 * /register
 * public
 */
const login = asyncHandler( async (req, res) => {
  const { identifier, password } = req.body;

  const user = await User.findOne({
    where: {
      [Op.or]: [{ username: identifier }, { email: identifier }],
    },
  });

  if (!user) return res.status(404).send({ error: "User not found" });

  const isPasswordMatch = await bcrypt.compare(password, user.password);

  if (!isPasswordMatch)
    return res.status(400).json({ error: "Wrong identifier or password" });

  const token = generateToken(user.toJSON());
  generateCookie(res, "token", token);

  res.status(200).send({ msg: "User loggedin successfully" });
})

/*
 * gives the user given from auth middleware
 * /me
 * public
 */
const getMe = async (req, res) => res.status(200).json({ user: req.user });

module.exports = { register, login, getMe };
