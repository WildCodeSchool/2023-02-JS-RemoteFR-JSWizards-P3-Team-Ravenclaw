const express = require("express");

const videoCategoryController = require("../controllers/videoCategoryController");

const router = express.Router();

router.get("/", videoCategoryController.getAll);

router.post("/", videoCategoryController.post);
router.delete("/:id", videoCategoryController.remove);

module.exports = router;
