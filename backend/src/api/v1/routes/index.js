const express = require("express");

const router = express.Router();

const authRoutes = require("./auth");
const userRoutes = require("./user");

router.use(userRoutes);
router.use(authRoutes);

module.exports = router;
