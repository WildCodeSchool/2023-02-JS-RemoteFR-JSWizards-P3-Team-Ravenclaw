const express = require("express");

const categoryController = require("../controllers/categoryController");

const router = express.Router();

/**
 * TODO: POST handler with validateCategory middleware...
 * TODO: PUT handler with validateCategory middleware...
 * TODO: DELETE handler...
 * TODO: add authentication wall...
 */
router.get("/", categoryController.getAll);

module.exports = router;
