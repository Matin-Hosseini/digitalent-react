const express = require("express");
const userController = require("../../api/v1/controllers/user");
const authMiddleware = require("./../../api/v1/middlewares/auth");

const router = express.Router();

// router.post("/register", userController.register);
router.get("/comments", userController.getUserComments);
router.put("/info", authMiddleware, userController.changeUserInfo);
router.put("/password", authMiddleware, userController.changeUserPassword);

module.exports = router;
