const express = require("express");

const languageControllers = require("../controllers/languageControllers");

const router = express.Router();

router.get("/", languageControllers.getAll);

module.exports = router;
