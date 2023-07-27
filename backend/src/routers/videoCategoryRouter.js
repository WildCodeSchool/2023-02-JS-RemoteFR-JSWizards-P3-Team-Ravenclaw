const express = require("express");

const verifyToken = require("../middlewares/verifyToken");
const videoCategoryController = require("../controllers/videoCategoryController");

const router = express.Router();

router.get("/", videoCategoryController.getAll);

// authentication wall : verifyToken is activated for each route after this line
router.use(verifyToken);

router.post("/", videoCategoryController.post);
router.delete("/:id", videoCategoryController.remove);

module.exports = router;
