const express = require("express");
const router = express.Router();
const {
  getAllSlots,
  updateSlotStatus,
} = require("../controllers/slotController");

// Endpoint untuk mengambil semua slot
router.get("/all-slots", getAllSlots);

// Endpoint untuk update status slot (kosong/terisi)
router.post("/update-slot", updateSlotStatus);

module.exports = router;
