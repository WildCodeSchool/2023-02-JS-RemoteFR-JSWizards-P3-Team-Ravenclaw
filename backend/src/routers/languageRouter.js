const express = require("express");

const languageController = require("../controllers/languageController");
const verifyToken = require("../middlewares/verifyToken");
const checkForExistingLanguage = require("../middlewares/langMiddleware");
const validateLanguageInfo = require("../middlewares/validators/languageValidator");

const router = express.Router();

router.get("/", languageController.getAll);

// authentication wall : verifyToken is activated for each route after this line
router.use(verifyToken);

router.put("/:id", validateLanguageInfo, languageController.editById);
router.delete("/:id", languageController.remove);
router.post(
  "/",
  validateLanguageInfo,
  checkForExistingLanguage,
  languageController.post
);

module.exports = router;
