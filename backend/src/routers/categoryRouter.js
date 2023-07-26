const express = require("express");

const categoryController = require("../controllers/categoryController");
const validateCategoryInfo = require("../middlewares/validators/categoryValidator");
const checkForExistingCategory = require("../middlewares/catMiddleware");

const router = express.Router();

router.get("/", categoryController.getAll);

router.put("/:id", validateCategoryInfo, categoryController.editById);
router.delete("/:id", categoryController.remove);
router.post(
  "/",
  validateCategoryInfo,
  checkForExistingCategory,
  categoryController.post
);

module.exports = router;
