const express = require("express");

const languageController = require("../controllers/languageController");
const validateLanguageInfo = require("../middlewares/validators/languageValidator");
const checkForExistingLanguage = require("../middlewares/langMiddleware");

const router = express.Router();

/**
 * TODO: POST handler with validateLanguage middleware..
 * TODO: DELETE handler...
 * TODO: add authentication wall...
 */
router.get("/", languageController.getAll);

router.post(
  "/",
  validateLanguageInfo,
  checkForExistingLanguage,
  languageController.post
);
router.put("/:id", validateLanguageInfo, languageController.editById);

module.exports = router;
