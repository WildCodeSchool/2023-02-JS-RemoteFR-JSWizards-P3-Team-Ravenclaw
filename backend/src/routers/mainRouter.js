const express = require("express");

const adminRouter = require("./adminRouter");
const authRouter = require("./authRouter");
const categoryRouter = require("./categoryRouter");
const gameRouter = require("./gameRouter");
const languageRouter = require("./languageRouter");
const planRouter = require("./planRouter");
const userRouter = require("./userRouter");
const videoRouter = require("./videoRouter");

const router = express.Router();

router.use("/admin", adminRouter);
router.use("/auth", authRouter);
router.use("/categories", categoryRouter);
router.use("/games", gameRouter);
router.use("/languages", languageRouter);
router.use("/plans", planRouter);
router.use("/users", userRouter);
router.use("/videos", videoRouter);

module.exports = router;
