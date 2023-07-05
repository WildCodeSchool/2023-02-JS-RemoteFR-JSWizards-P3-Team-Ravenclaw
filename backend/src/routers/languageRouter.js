const express = require("express");

const languageController = require("../controllers/languageController");

const router = express.Router();

router.get("/", languageController.getAll);

module.exports = router;
