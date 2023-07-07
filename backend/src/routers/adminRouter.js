const express = require("express");

const adminController = require("../controllers/adminController");

const router = express.Router();

/**
 * TODO: POST handler with validateVideo middleware...
 * TODO: PUT handler with validateVideo middleware...
 * TODO: DELETE handler...
 * TODO: add authentication wall...
 */
router.get("/stats", adminController.getAllStats);
router.get("/videos", adminController.getAllVideos);

module.exports = router;
