// backend/routes/parkingRoutes.js

const express = require("express");
const router = express.Router();
const parkingController = require("../controllers/parkingController");

// Endpoint untuk masuk parkir
router.post("/masuk", parkingController.parkVehicle);

// Endpoint untuk keluar parkir
router.post("/keluar", parkingController.leaveVehicle);

module.exports = router;
