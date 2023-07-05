const express = require("express");

const gameController = require("../controllers/gameController");

const router = express.Router();

router.get("/", gameController.getAll);

module.exports = router;
