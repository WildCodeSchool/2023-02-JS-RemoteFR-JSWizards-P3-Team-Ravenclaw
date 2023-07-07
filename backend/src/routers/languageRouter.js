const express = require("express");

const languageController = require("../controllers/languageController");

const router = express.Router();

/**
 * TODO: POST handler with validateLanguage middleware...
 * TODO: PUT handler with validateLanguage middleware...
 * TODO: DELETE handler...
 * TODO: add authentication wall...
 */
router.get("/", languageController.getAll);

module.exports = router;
