/*
 * registers new user and saves token to cookie
 * /register
 * public
 */

const { User } = require("./../../../models");

const register = async (req, res) => {
  res.status(200).json({ msg: "created" });
};

module.exports = { register };
