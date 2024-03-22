const jwt = require("jsonwebtoken");

const generateToken = (payload) => {
  const token = jwt.sign({ payload }, process.env.JWTSECRET, {
    expiresIn: "1m",
  });

  return token;
};

module.exports = { generateToken };
