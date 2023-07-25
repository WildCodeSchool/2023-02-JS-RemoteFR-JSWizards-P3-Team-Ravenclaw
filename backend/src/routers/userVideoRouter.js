const express = require("express");

const userVideoController = require("../controllers/userVideoController");

const router = express.Router();

router.post("/", userVideoController.postFavs);

router.put("/", userVideoController.insertFavs);
router.get("/", userVideoController.getOne);

router.delete("/", userVideoController.deleteFav);

module.exports = router;
