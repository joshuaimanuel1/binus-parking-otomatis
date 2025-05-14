const db = require("../config/db");

const User = {
  findByRFID: (rfid, callback) => {
    const query = "SELECT * FROM users WHERE rfid = ?";
    db.query(query, [rfid], callback);
  },
};

module.exports = User;
