const express = require("express");

const planController = require("../controllers/planController");

const router = express.Router();

/**
 * TODO: POST handler with validateVideo middleware...
 * TODO: PUT handler with validateVideo middleware...
 * TODO: DELETE handler...
 * TODO: add authentication wall...
 */
router.get("/", planController.getAllPlans);
router.get("/:id", planController.getPlanById);

module.exports = router;
