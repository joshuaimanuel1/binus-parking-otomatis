const express = require("express");
const router = express.Router();
const {
  masukParkir,
  keluarParkir,
} = require("../controllers/parkingController");

// Endpoint untuk masuk parkir
router.post("/parking", masukParkir);

// Endpoint untuk keluar parkir
router.post("/keluar", keluarParkir);

module.exports = router;
