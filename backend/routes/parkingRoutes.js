const express = require("express");
const router = express.Router();
const parkingController = require("../controllers/parkingController");

router.post("/allocate", parkingController.getAvailableSlot);
router.get("/all-slots", parkingController.getAllSlots);

module.exports = router;
