const express = require("express");
const authController = require("./../controllers/auth");
const authMiddleware = require("./../middlewares/auth");

const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);

router.post("/someroute", authMiddleware, authController.test);

module.exports = router;
