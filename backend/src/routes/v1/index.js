const express = require("express");

const router = express.Router();

const authRoutes = require("./auth");
const userRoutes = require("./user");
const categoryRoutes = require("./category");
const courseRoutes = require("./course");

router.use(userRoutes);
router.use(authRoutes);
router.use("/categories", categoryRoutes);
router.use("/courses", courseRoutes);

module.exports = router;
