const db = require("../config/db");

// Update status slot parkir
const updateSlotStatus = (req, res) => {
  const { id, isOccupied } = req.body;

  db.query(
    "UPDATE parking_slots SET is_occupied = ? WHERE id = ?",
    [isOccupied, id],
    (err, results) => {
      if (err) {
        return res.status(500).json({ message: "Error updating slot" });
      }

      res.json({ message: "Slot updated successfully" });
    }
  );
};

module.exports = { updateSlotStatus };
