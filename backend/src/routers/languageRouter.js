const express = require("express");

const languageController = require("../controllers/languageController");
const validateLanguageInfo = require("../middlewares/validators/languageValidator");

const router = express.Router();

/**
 * TODO: POST handler with validateLanguage middleware...cl
 * TODO: DELETE handler...
 * TODO: add authentication wall...
 */
router.get("/", languageController.getAll);

router.put("/:id", validateLanguageInfo, languageController.editById);

module.exports = router;
