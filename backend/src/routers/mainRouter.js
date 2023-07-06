const express = require("express");

const userRouter = require("./userRouter");
const videoRouter = require("./videoRouter");
const gameRouter = require("./gameRouter");
const languageRouter = require("./languageRouter");
const authRouter = require("./authRouter");

const router = express.Router();

router.use("/users", userRouter);
router.use("/videos", videoRouter);
router.use("/games", gameRouter);
router.use("/languages", languageRouter);
router.use("/", authRouter);

module.exports = router;
