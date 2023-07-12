const express = require("express");

const videoController = require("../controllers/videoController");

const router = express.Router();

/**
 * TODO: POST handler with validateVideo middleware...
 * TODO: PUT handler with validateVideo middleware...
 * TODO: DELETE handler...
 * TODO: add authentication wall...
 */
router.get("/", videoController.getAllWithFilters);
router.get("/:id", videoController.getById);

module.exports = router;
