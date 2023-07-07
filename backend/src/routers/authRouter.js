const express = require("express");

const authController = require("../controllers/authController");
const {
  verifyEmail,
  verifyPassword,
} = require("../middlewares/authMiddleware");

const router = express.Router();

/**
 * TODO: register route...
 * TODO: logout route...
 */
router.post("/login", verifyEmail, verifyPassword, authController.login);

module.exports = router;
