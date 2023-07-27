const express = require("express");

const categoryController = require("../controllers/categoryController");
const verifyToken = require("../middlewares/verifyToken");
const checkForExistingCategory = require("../middlewares/catMiddleware");
const validateCategoryInfo = require("../middlewares/validators/categoryValidator");

const router = express.Router();

router.get("/", categoryController.getAll);

// authentication wall : verifyToken is activated for each route after this line
router.use(verifyToken);

router.put("/:id", validateCategoryInfo, categoryController.editById);
router.delete("/:id", categoryController.remove);
router.post(
  "/",
  validateCategoryInfo,
  checkForExistingCategory,
  categoryController.post
);

module.exports = router;
