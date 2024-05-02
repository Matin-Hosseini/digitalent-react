const express = require("express");
const authMiddleware = require("./../../api/v1/middlewares/auth");
const newsletterController = require("./../../api/v1/controllers/newsletter");

const router = express.Router();

router.post("/create", newsletterController.create);
router.delete("/remove", authMiddleware, newsletterController.remove);

module.exports = router;
