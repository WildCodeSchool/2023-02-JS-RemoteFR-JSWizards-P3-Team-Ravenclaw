const express = require("express");

const adminController = require("../controllers/adminController");

const router = express.Router();

router.get("/stats", adminController.getAllStats);
router.get("/videos", adminController.getAllVideos);

module.exports = router;
