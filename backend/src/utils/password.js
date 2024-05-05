const bcrypt = require("bcrypt");

const verifyPassword = (password, hashed) => {
  return bcrypt.compareSync(password, hashed);
};

module.exports = {verifyPassword}