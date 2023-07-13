const express = require("express");
const multer = require("multer");

const uploadController = require("../controllers/uploadController");
const validateThumbnailInfo = require("../middlewares/validators/thumbnailValidator");

const GAME_THUMB_DEST = "./public/uploads/games/";

const router = express.Router();
// public folder destination for games thumbnails upload
const uploadGames = multer({ dest: GAME_THUMB_DEST });

/**
 * TODO: add authentication wall...
 */
router.post(
  "/games/thumbnails",
  uploadGames.single("game_thumbnail"),
  validateThumbnailInfo,
  uploadController.post
);

module.exports = router;
