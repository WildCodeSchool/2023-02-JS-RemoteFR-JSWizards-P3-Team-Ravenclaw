const express = require("express");

const gameController = require("../controllers/gameController");

const router = express.Router();

/**
 * TODO: POST handler with validateGame middleware...
 * TODO: PUT handler with validateGame middleware...
 * TODO: DELETE handler...
 * TODO: add authentication wall...
 */
router.get("/", gameController.getAll);

module.exports = router;
