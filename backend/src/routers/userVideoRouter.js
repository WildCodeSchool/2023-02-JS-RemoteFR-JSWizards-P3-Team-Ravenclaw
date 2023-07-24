const express = require("express");

const userVideoController = require("../controllers/userVideoController");

const router = express.Router();

/**
 * TODO: add authentication wall...
 */

router.put("/", userVideoController.insertFavs);
router.get("/", userVideoController.getOne);
router.get("/:id", userVideoController.getAllUserFavorites);

module.exports = router;
