const db = require("../config/db");

// Mendapatkan slot parkir yang tersedia dan alokasi
const getAvailableSlot = (req, res) => {
  db.query(
    "SELECT * FROM parking_slots WHERE is_occupied = 0 ORDER BY location ASC LIMIT 1",
    (err, results) => {
      if (err) {
        return res.status(500).json({ message: "Error getting slot" });
      }

      if (results.length === 0) {
        return res.status(404).json({ message: "No available slots" });
      }

      const slot = results[0];
      res.json({ slot_code: slot.slot_code });
    }
  );
};

// Mendapatkan daftar semua slot
const getAllSlots = (req, res) => {
  db.query("SELECT * FROM parking_slots", (err, results) => {
    if (err) {
      return res.status(500).json({ message: "Error getting all slots" });
    }

    res.json(results);
  });
};

module.exports = { getAvailableSlot, getAllSlots };
