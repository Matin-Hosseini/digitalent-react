const express = require("express");
const authController = require("./../controllers/auth");
const authMiddleware = require("./../middlewares/auth");

const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/get-me", authMiddleware, authController.getMe);

router.post("/someroute", authController.test);

module.exports = router;
