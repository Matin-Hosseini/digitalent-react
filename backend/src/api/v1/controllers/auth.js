const jwt = require("jsonwebtoken");
const { User } = require("./../models");

/*
 * registers new user and stores token to cookie
 * /register
 * public
 */

const register = async (req, res) => {
  const newUser = await User.create(req.body);
  const token = jwt.sign(newUser.id, process.env.JWTSECRET);

  res.cookie("user", token, {
    httpOnly: true,
    sameSite: true,
    maxAge: 3 * 24 * 60 * 60 * 1000,
  });

  res.status(201).json({ msg: "New user created" });
};

/*
 * loggs user in and stores token in cookie
 * /register
 * public
 */

const login = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({
    where: {
      username: req.body.username,
    },
  });

  if (!user)
    return res.status(404).send({ error: "User not found" });

  const token = jwt.sign(user.id, process.env.JWTSECRET);
  res.cookie("user", token, {
    httpOnly: true,
    sameSite: true,
    maxAge: 3 * 24 * 60 * 60 * 1000,
  });

  res.send({ msg: "user logged in", user });
};

module.exports = { register, login };
