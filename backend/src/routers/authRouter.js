const express = require("express");

const authController = require("../controllers/authController");
const {
  verifyEmail,
  verifyPassword,
} = require("../middlewares/authMiddleware");

const router = express.Router();

/**
 * TODO: register route...
 */
router.post("/login", verifyEmail, verifyPassword, authController.login);
router.get("/logout", authController.logout);
router.get("/register");
// router.get(
//   "/register",
//   validateUserInfo,
//   checkForExistingAccount,
//   authController.logout
// );

module.exports = router;
