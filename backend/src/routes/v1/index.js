const express = require("express");

const router = express.Router();

const authRoutes = require("./auth");
const userRoutes = require("./user");
const categoryRoutes = require("./category");
const courseRoutes = require("./course");
const commentRoutes = require("./comment");

router.use(authRoutes);
router.use("/user", userRoutes);
router.use("/categories", categoryRoutes);
router.use("/courses", courseRoutes);
router.use("/comments", commentRoutes);

module.exports = router;
