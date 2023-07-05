const express = require("express");

const router = express.Router();

const videoControllers = require("./controllers/videoControllers");
const languageControllers = require("./controllers/languageControllers");
const gameControllers = require("./controllers/gameControllers");

router.get("/videos", videoControllers.getAllWiltFilters);
router.get("/videos/:id", videoControllers.getById);

router.get("/languages", languageControllers.getAll);
router.get("/games", gameControllers.getAll);

module.exports = router;
