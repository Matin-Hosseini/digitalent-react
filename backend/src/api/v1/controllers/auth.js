const { User } = require("./../../../models");
const { generateToken } = require("./../../../utils/generateToken");
const { generateCookie } = require("./../../../utils/cookie");
const { Op } = require("sequelize");
const jwt = require("jsonwebtoken");

/*
 * registers new user and stores token to cookie
 * /register
 * public
 */

const register = async (req, res) => {
  const newUser = await User.create(req.body);
  const token = generateToken(newUser.toJSON());

  generateCookie(res, "token", token);

  res.status(201).json({ message: "New user created!" });
};

/*
 * loggs user in and stores token in cookie
 * /register
 * public
 */

const login = async (req, res) => {
  const { identifier, password } = req.body;
  console.log(req.cookie);
  const cookie = req.cookie;

  const user = await User.findOne({
    where: {
      [Op.or]: [{ username: identifier }, { email: identifier }],
    },
  });

  if (!user) return res.status(404).send({ error: "User not found" });

  const token = generateToken(user.id);
  generateCookie(res, "user", token);

  res.send({ user, token });
};

const getMe = async (req, res) => {
  // const authorization = req.headers.authorization;
  // if (!authorization)
  //   return res.status(403).json({ error: "Token not provided" });

  // const token = authorization.split(" ")[1];

  const user = req.user;
  // try {
  //   const decodedToken = jwt.verify(token, process.env.JWTSECRET);

  //   const targetUser = await User.findOne({
  //     where: {
  //       id: decodedToken.payload,
  //     },
  //   });

  //   res.status(200).json({ user: targetUser });
  // } catch (error) {
  //   return res.status(403).json({ error: "Please login again, JWT fail" });
  // }

  res.status(200).send({ user });
};

const test = async (req, res) => {
  console.log(req.cookies);

  res.status(200).json({ msg: "inside auth controller" });
};

const cookie = async (req, res) => {
  // console.log("in cookie router");
  // res.cookie("my-cookie", "this is the new value", {
  //   httpOnly: true,
  //   maxAge: 100000,
  // });

  // console.log(req.cookies);

  res.status(200).json({ message: "cookie created" });
};

module.exports = { register, login, test, getMe, cookie };
