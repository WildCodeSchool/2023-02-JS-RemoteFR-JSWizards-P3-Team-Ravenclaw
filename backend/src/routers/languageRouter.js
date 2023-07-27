const express = require("express");

const languageController = require("../controllers/languageController");
const validateLanguageInfo = require("../middlewares/validators/languageValidator");
const checkForExistingLanguage = require("../middlewares/langMiddleware");

const router = express.Router();

router.get("/", languageController.getAll);

router.put("/:id", validateLanguageInfo, languageController.editById);
router.delete("/:id", languageController.remove);
router.post(
  "/",
  validateLanguageInfo,
  checkForExistingLanguage,
  languageController.post
);

module.exports = router;
