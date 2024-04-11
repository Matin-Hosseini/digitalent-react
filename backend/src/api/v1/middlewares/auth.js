const jwt = require("jsonwebtoken");
const { User } = require("../../../models");

const auth = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) return res.status(401).json({ error: "Please login!" });

  // if (!authorization)
  //   return res.status(403).json({ error: "Token not provided" });

  try {
    const decodedToken = jwt.verify(token, process.env.JWTSECRET);

    const user = await User.findOne({
      where: {
        id: decodedToken.payload,
      },
    });

    req.user = user;
  } catch (error) {
    return res.status(403).json({ error: "Please login again, JWT fail" });
  }

  next();
};

module.exports = auth;
