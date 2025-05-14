const db = require("../config/db");

const Slot = {
  findAvailableSlot: (callback) => {
    const query = "SELECT * FROM parking_slots WHERE is_occupied = 0 LIMIT 1";
    db.query(query, callback);
  },

  updateSlotStatus: (id, isOccupied, callback) => {
    const query = "UPDATE parking_slots SET is_occupied = ? WHERE id = ?";
    db.query(query, [isOccupied, id], callback);
  },

  getAllSlots: (callback) => {
    const query = "SELECT * FROM parking_slots";
    db.query(query, callback);
  },

  findSlotByRFID: (rfid, callback) => {
    const query = `
      SELECT ps.* FROM parking_slots ps
      JOIN parking_records pr ON pr.slot_id = ps.id
      WHERE pr.rfid = ? AND pr.exit_time IS NULL
    `;
    db.query(query, [rfid], callback);
  },
};

module.exports = Slot;
