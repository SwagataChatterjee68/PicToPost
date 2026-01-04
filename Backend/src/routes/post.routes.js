const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware");
const multer = require("multer");
const router = express.Router();

const upload = { Storage: multer.memoryStorage() };
router.post("/", authMiddleware,upload.single("image"),);

module.exports = router;
