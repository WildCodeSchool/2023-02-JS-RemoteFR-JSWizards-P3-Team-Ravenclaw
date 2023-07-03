const express = require("express");

const router = express.Router();

const videoControllers = require("./controllers/videoControllers");
const languageControllers = require("./controllers/languageControllers");

// router.get("/items", itemControllers.browse);
// router.get("/items/:id", itemControllers.read);
// router.put("/items/:id", itemControllers.edit);
// router.post("/items", itemControllers.add);
// router.delete("/items/:id", itemControllers.destroy);

router.get("/videos", videoControllers.getAll);
router.get("/languages", languageControllers.getAll);

module.exports = router;
