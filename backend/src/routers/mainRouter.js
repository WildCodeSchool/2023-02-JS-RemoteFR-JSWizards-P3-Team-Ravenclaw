const express = require("express");

const videoRouter = require("./videoRouter");
const gameRouter = require("./gameRouter");
const languageRouter = require("./languageRouter");

const router = express.Router();

router.use("/videos", videoRouter);
router.use("/games", gameRouter);
router.use("/languages", languageRouter);

module.exports = router;
