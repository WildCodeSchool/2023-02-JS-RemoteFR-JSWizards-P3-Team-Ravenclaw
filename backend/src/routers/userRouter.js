const express = require("express");

const userController = require("../controllers/userController");
const validateUserInfo = require("../middlewares/validators/userValidator");
const verifyToken = require("../middlewares/verifyToken");
const {
  verifyEmail,
  checkForExistingAccount,
  hashPassword,
} = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/", userController.getAll);
router.get("/stats/:id", userController.getAllStats);
router.get("/:id", userController.getById);

router.post(
  "/",
  validateUserInfo,
  checkForExistingAccount,
  hashPassword,
  userController.create
);

// authentication wall : verifyToken is activated for each route after this line
router.use(verifyToken);

router.put(
  "/:id",
  validateUserInfo,
  verifyEmail,
  hashPassword,
  userController.editById
);

router.delete("/:id", userController.remove);

module.exports = router;
