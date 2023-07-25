const express = require("express");

const userRouter = require("./userRouter");
const videoRouter = require("./videoRouter");
const gameRouter = require("./gameRouter");
const languageRouter = require("./languageRouter");
const planRouter = require("./planRouter");
const adminRouter = require("./adminRouter");
const UserVideo = require("./userVideoRouter");
const authRouter = require("./authRouter");

const router = express.Router();

router.use("/users", userRouter);
router.use("/videos", videoRouter);
router.use("/games", gameRouter);
router.use("/languages", languageRouter);
router.use("/plans", planRouter);
router.use("/admin", adminRouter);
router.use("/userVideo", UserVideo);
router.use("/auth", authRouter);

module.exports = router;
