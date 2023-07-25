const express = require("express");

const videoController = require("../controllers/videoController");
const validateVideoInfo = require("../middlewares/validators/videoValidator");

const router = express.Router();

/**
 * TODO: add authentication wall...
 */
router.get("/", videoController.getAllWithFilters);
router.get("/:id", videoController.getById);

router.put("/:id", validateVideoInfo, videoController.editById);
router.delete("/:id", videoController.remove);
router.post("/", validateVideoInfo, videoController.post);

module.exports = router;
