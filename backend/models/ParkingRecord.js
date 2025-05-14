const db = require("../config/db");

const ParkingRecord = {
  createRecord: (rfid, slot_id, callback) => {
    const query =
      "INSERT INTO parking_records (rfid, slot_id, entry_time) VALUES (?, ?, NOW())";
    db.query(query, [rfid, slot_id], callback);
  },

  updateExitTime: (rfid, callback) => {
    const query = `
      UPDATE parking_records 
      SET exit_time = NOW() 
      WHERE rfid = ? AND exit_time IS NULL
    `;
    db.query(query, [rfid], callback);
  },
};

module.exports = ParkingRecord;
