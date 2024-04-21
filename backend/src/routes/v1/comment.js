const express = require("express");
const commentController = require("./../../api/v1/controllers/comment");
const router = express.Router();

router.post("/create", commentController.createComment);
router.get("/", commentController.getComments)

module.exports = router