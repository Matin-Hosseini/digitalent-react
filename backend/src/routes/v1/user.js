const express = require("express");
const userController = require("../../api/v1/controllers/user");

const router = express.Router();

// router.post("/register", userController.register);
router.get("/comments", userController.getUserComments);

module.exports = router;
