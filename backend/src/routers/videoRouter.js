const express = require("express");

const videoController = require("../controllers/videoController");

const router = express.Router();

router.get("/", videoController.getAllWiltFilters);
router.get("/:id", videoController.getById);

module.exports = router;
