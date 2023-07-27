const express = require("express");

const gameController = require("../controllers/gameController");
const verifyToken = require("../middlewares/verifyToken");
const checkForExistingGame = require("../middlewares/gameMiddleware");
const validateGameInfo = require("../middlewares/validators/gameValidator");

const router = express.Router();

router.get("/", gameController.getAll);

// authentication wall : verifyToken is activated for each route after this line
router.use(verifyToken);

router.put("/:id", validateGameInfo, gameController.editById);
router.delete("/:id", gameController.remove);
router.post("/", validateGameInfo, checkForExistingGame, gameController.post);

module.exports = router;
