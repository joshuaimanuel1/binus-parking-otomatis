const express = require("express");
const router = express.Router();
const slotController = require("../controllers/slotController");

router.post("/update", slotController.updateSlotStatus);

module.exports = router;
