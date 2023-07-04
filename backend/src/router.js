const express = require("express");

const router = express.Router();

const videoControllers = require("./controllers/videoControllers");
const languageControllers = require("./controllers/languageControllers");
const gameControllers = require("./controllers/gameControllers");

router.get("/videos", videoControllers.getAll);
router.get("/languages", languageControllers.getAll);
router.get("/games", gameControllers.getAll);

module.exports = router;
