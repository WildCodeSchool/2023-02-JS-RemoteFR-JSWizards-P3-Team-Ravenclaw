const express = require("express");

const gameController = require("../controllers/gameController");
const validateGameInfo = require("../middlewares/validators/gameValidator");
const checkForExistingGame = require("../middlewares/gameMiddleware");

const router = express.Router();

/**
 * TODO: add authentication wall...
 */
router.get("/", gameController.getAll);

router.put("/:id", validateGameInfo, gameController.editById);
router.delete("/:id", gameController.remove);
router.post("/", validateGameInfo, checkForExistingGame, gameController.post);

module.exports = router;
