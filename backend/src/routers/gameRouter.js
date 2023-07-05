const express = require("express");

const gameControllers = require("../controllers/gameControllers");

const router = express.Router();

router.get("/", gameControllers.getAll);

module.exports = router;
