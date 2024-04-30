const jwt = require("jsonwebtoken");
const { User } = require("../../../models");
const asyncHandler = require("express-async-handler");

const auth = asyncHandler(async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) return res.status(401).json({ error: "Please login!" });

  try {
    const decodedToken = jwt.verify(token, process.env.JWTSECRET);

    const user = await User.findOne({
      where: {
        id: decodedToken.payload.id,
      },
    });

    const userInfo = user.toJSON();
    req.user = userInfo;
  } catch (error) {
    console.log("token expired! please login");
    return res.status(403).json({ error: "Please login again, JWT fail" });
  }

  next();
});

module.exports = auth;
