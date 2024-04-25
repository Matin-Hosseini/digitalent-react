const express = require("express");
const authController = require("../../api/v1/controllers/auth");
const authMiddleware = require("../../api/v1/middlewares/auth");

const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/me", authMiddleware, authController.getMe);

router.post("/someroute", authController.test);
router.get("/cookie", authController.test);

module.exports = router;
