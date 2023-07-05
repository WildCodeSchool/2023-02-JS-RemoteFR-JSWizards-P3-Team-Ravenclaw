const express = require("express");

const videoControllers = require("../controllers/videoControllers");

const router = express.Router();

router.get("/", videoControllers.getAllWiltFilters);
router.get("/:id", videoControllers.getById);

module.exports = router;
